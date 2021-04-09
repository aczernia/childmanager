using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ChildManager.Entities;
using ChildManager.Models;

namespace ChildManager
{
    public class ChildManagerMappingProfile : Profile
    {
        public ChildManagerMappingProfile()
        {
            CreateMap<Student, StudentDto>()
                .ForMember(x => x.ClassName, c => c.MapFrom(s =>s.Class.ClassName));

            CreateMap<CreateStudentDto, Student>()
                .ForMember(x => x.Class, c => c.MapFrom(dto => new Class() {ClassName = dto.ClassName}));
            
        }
    }
}
