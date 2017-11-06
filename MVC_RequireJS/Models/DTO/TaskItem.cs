using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MVC_RequireJS.Models.DTO
{
    public class TaskItem
    {
        public TaskItem()
        {
        }
        public TaskItem(int id, DateTime taskDate, string title, string desc, bool completed)
        {
            Id = id;
            TaskDate = taskDate;
            Title = title;
            Description = desc;
            Status = completed ? "Complete" : "Queued";
        }

        public int Id { get; set; }
        [Required]
        public DateTime TaskDate { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
    }
}