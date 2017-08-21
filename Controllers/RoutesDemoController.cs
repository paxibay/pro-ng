using System.Web.Mvc;

namespace CH09_The_Anatomy_of_an_AngularJS_App.Controllers
{
    public class RoutesDemoController : Controller
    {
        public ActionResult One()
        {
            return View();
        }

        public ActionResult Two(int donuts = 1)
        {
            ViewBag.Donuts = donuts;
            return View();
        }

        [Authorize]
        public ActionResult Three()
        {
            return View();
        }
    }
}