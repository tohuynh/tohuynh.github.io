variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "my-site"
}

variable "container_image" {
  description = "Value of the Container Image"
  type        = string
  default     = "nginx:latest"
}

variable "EC2_SSH_PUBLIC_KEY" {
  description = "Public SSH key for EC2 instance"
  type        = string
  default     = ""
}
