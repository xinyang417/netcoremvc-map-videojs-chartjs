namespace comp4945_aspnetcore_app.Controllers;
using Microsoft.AspNetCore.Mvc;
using comp4945_aspnetcore_app.Models;
using comp4945_aspnetcore_app.Services; 
using System.Threading.Tasks;

public class DiaryController : Controller
{
    private readonly IDiaryManager _diaryManager;

    public DiaryController(IDiaryManager diaryManager)
    {
        _diaryManager = diaryManager;
    }

    public async Task<IActionResult> Index()
    {
        var entries = await _diaryManager.GetEntriesAsync();
        return View("~/Views/Home/Index.cshtml");
    }

    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Create(Diary entry)
    {
        if (ModelState.IsValid)
        {
            await _diaryManager.AddEntryAsync(entry);
            return RedirectToAction(nameof(Index));
        }
        return View(entry);
    }
}
