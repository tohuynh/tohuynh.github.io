output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.site_server.id
}

output "instance_name" {
  description = "Name of the EC2 instance"
  value       = aws_instance.site_server.tags["Name"]
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.site_server.public_ip
}

output "instance_public_dns" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.site_server.public_dns
}