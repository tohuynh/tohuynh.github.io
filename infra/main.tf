terraform {
  cloud {
    organization = "switz21"

    workspaces {
      name = "my-site"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_key_pair" "site_ec2_key" {
  key_name   = "site_ec2_key"
  public_key = var.EC2_SSH_PUBLIC_KEY
}

resource "aws_instance" "site_server" {
  ami           = "ami-094fa9930ab0ded56"
  instance_type = "t2.micro"

  tags = {
    Name = var.instance_name
  }

  provisioner "file" {
    source      = "./certs/certificate.crt"
    destination = "~/certs/certificate.crt"
  }

  provisioner "file" {
    source      = "./certs/privatekey.key"
    destination = "~/certs/privatekey.key"
  }

  key_name = aws_key_pair.site_ec2_key.key_name

  security_groups = ["site_access"]

  user_data = <<-EOF
    #!/bin/bash
    sudo apt-get update -y
    sudo apt-get install -y docker.io
    sudo systemctl start docker
    sudo docker pull "${var.container_image}"
    sudo docker run -d \
      -p 80:8080 -p 443:443 \
      -v ./certs:/etc/nginx/certs \
      --name my-site \
      "${var.container_image}"
    EOF
}

resource "aws_security_group" "site_access" {
  name        = "site_access"
  description = "Open port 22 and 80"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allowing SSH access from anywhere; tighten this for security
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Open to all sources; restrict as needed for security
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
