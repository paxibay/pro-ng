using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CH09_The_Anatomy_of_an_AngularJS_App.Controllers
{
    public class Ch22Controller : Controller
    {
        // GET: Ch22
        public ActionResult TableView()
        {
            return PartialView();
        }

        public ActionResult EditorView()
        {
            return PartialView();
        }

        public ActionResult Products00_base()
        {
            return View();
        }

        public ActionResult Products01_ngview()
        {
            return View();
        }

        public ActionResult Products02_RoutParameters()
        {
            return View();
        }

        public ActionResult Products03_Controllers()
        {
            return View();
        }

        public ActionResult Products04_Dependency()
        {
            return View();
        }
        // 
    }
}