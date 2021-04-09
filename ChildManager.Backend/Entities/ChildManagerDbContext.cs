using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ChildManager.Entities
{
    public class ChildManagerDbContext : DbContext
    {
        private string _connectionString =
            "Server=(localdb)\\mssqllocaldb;Database=ChildManagerDb;Trusted_Connection=True;";

        public DbSet<Student> Students { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Journal> Journals { get; set; }


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

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}