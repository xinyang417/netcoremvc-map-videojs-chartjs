namespace comp4945_aspnetcore_app.Services;

using System.Collections.Generic;
using System.Threading.Tasks;

public class DiaryManager : IDiaryManager
{
    private List<Diary> entries = new List<Diary>();

    public async Task<List<Diary>> GetEntriesAsync()
    {
        // retrieve diary entries from a data source
        return entries;
    }

    public async Task AddEntryAsync(Diary entry)
    {
        entries.Add(entry);
        // save diary entry 
    }
}
