using System;
using System.Web.Mvc;

namespace $rootnamespace$.Controllers
{
    public class FramerizrController : Controller
    {
        //
        // GET: /Framerizr/

        public ActionResult Index(Uri uri)
        {
            return View(uri);
        }
    }
}
