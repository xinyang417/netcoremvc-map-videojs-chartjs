namespace comp4945_aspnetcore_app.Services;

using System.Collections.Generic;
using System.Threading.Tasks;

public interface IDiaryManager
{
    Task<List<Diary>> GetEntriesAsync();
    Task AddEntryAsync(Diary entry);
}