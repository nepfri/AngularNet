namespace API.Entities
{
    public class AppUser
    {
        public string UserName { get; set; }
        public int Id { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
    }
}
