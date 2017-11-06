using MVC_RequireJS.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MVC_RequireJS.Controllers
{
    public class TaskController : ApiController
    {
        private static List<TaskItem> tasks = new List<TaskItem>()
        {
            new TaskItem(1, DateTime.Now, "Task 1", "This is task 1", false),
            new TaskItem(2, Convert.ToDateTime("11/15/2017 10:30 AM"), "Task 2", "This is task 2", false)
        };
        //Get all tasks
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(tasks);
            }
            catch(Exception ex)
            {
                return InternalServerError();
            }
        }
        [HttpPost]
        //Add new task
        public IHttpActionResult Post(TaskItem task)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var id = tasks.OrderBy(t => t.Id).Last().Id + 1;
                    task.Id = id;
                    tasks.Add(task);

                    string uri = Url.Link("DefaultApi", new { id = id });
                    return Created(new Uri(uri), task);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch(Exception ex)
            {
                return InternalServerError();
            }
        }
    }
}