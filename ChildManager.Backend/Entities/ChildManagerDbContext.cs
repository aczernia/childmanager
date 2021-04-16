using System.Security.Cryptography.Xml;
using Microsoft.EntityFrameworkCore;

namespace ChildManager.Entities
{
    public class ChildManagerDbContext : DbContext
    {
        private string _connectionString =
            "Server=(localdb)\\MSSQLLocalDB ;Database=ChildManagerDb;Trusted_Connection=True;Integrated Security=true";


        public DbSet<Student> Students { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Journal> Journals { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }


        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>()
                .Property(x => x.Pesel)
                .IsRequired();

            modelBuilder.Entity<Class>()
                .Property(x => x.ClassName)
                .IsRequired();
            modelBuilder.Entity<Student>()
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(25);
            modelBuilder.Entity<Teacher>()
                .Property(x => x.Name)
                .IsRequired();
            modelBuilder.Entity<Journal>()
                .Property(x => x.Subject)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(X => X.Email)
                .IsRequired();

            modelBuilder.Entity<Role>()
                .Property(x => x.Name).IsRequired();



        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }


    }
}