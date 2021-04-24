using System.Security.Cryptography.Xml;
using Microsoft.EntityFrameworkCore;

namespace ChildManager.Entities
{
    public class ChildManagerDbContext : DbContext
    {
        private string _connectionString =
            "Server=.;Database=ChildManagerDb;Trusted_Connection=True;Integrated Security=true;MultipleActiveResultSets=true";


        public DbSet<Student> Students { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Journal> Journals { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Absence> Absences { get; set; }

        public DbSet<Subject> Subjects { get; set; }
        public DbSet<LessonPlan> LessonPlans { get; set; }

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
            modelBuilder.Entity<Subject>()
                .Property(a => a.Name)
                .IsRequired();

            modelBuilder.Entity<LessonPlan>()
                .HasOne(a => a.Teacher)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Lesson>()
                .HasOne(a => a.Teacher)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }


    }
}