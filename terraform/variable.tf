variable "region" {
  type        = string
  default     = "eu-west-2"
  description = "aws region"
}

variable "instance_type" {
  type        = string
  default     = "t2.micro"
  description = "type of ec2 to deploy"
}

variable "ami" {
  type        = string
  description = "type of architecture for ec2"
  default     = "ami-03e88be9ecff64781"
}

variable "server_name" {
  type        = string
  description = "The name of my ec2 instance"
  default     = "My Web Server"
}

variable "aws_keyname" {
  type        = string
  description = "name of aws priavate key"
}
