using Domain.Entities;

namespace Application.Abstractions.Repositories;

public interface INoteRepository
{
    public Task AddAsync(string name, string content);
    public Task<NoteEntity> GetByIdAsync(Guid id);
    public Task<IEnumerable<NoteEntity>> GetAllAsync();
    public Task UpdateAsync(Guid id, string newName, string newContent);
    public Task DeleteAsync(Guid id);
}
