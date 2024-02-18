﻿using System.ComponentModel.DataAnnotations;

namespace API.Dto
{
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        public string Email { get; set; }
    }
}