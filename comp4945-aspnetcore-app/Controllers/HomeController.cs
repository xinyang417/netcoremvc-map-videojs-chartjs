using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using comp4945_aspnetcore_app.Models;
using Microsoft.Extensions.Configuration;

namespace comp4945_aspnetcore_app.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        private string GetGoogleMapsApiKey()
        {
            string googleMapsApiKey = _configuration["GoogleMapsApiKey"];
            if (string.IsNullOrEmpty(googleMapsApiKey))
            {
                _logger.LogError("Google Maps API key is missing or invalid.");
            }
            return googleMapsApiKey;
        }

        public IActionResult Index()
        {
            ViewData["GoogleMapsApiKey"] = GetGoogleMapsApiKey();
            return View();
        }

        public IActionResult Bits()
        {
            ViewData["GoogleMapsApiKey"] = GetGoogleMapsApiKey();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

}