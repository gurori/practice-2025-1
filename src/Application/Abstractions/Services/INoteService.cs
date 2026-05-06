using Domain.Entities;
using Domain.Models.Notes;

namespace Application.Abstractions.Services;

public interface INoteService
{
    public Task AddAsync(NoteRequest request);
    public Task<NoteEntity> GetAsync(Guid id);
    public Task<IEnumerable<NoteEntity>> GetAsync();
    public Task UpdateAsync(UpdateNoteRequest request);
    public Task DeleteAsync(Guid id);
}
