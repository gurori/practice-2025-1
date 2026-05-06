using Application.Abstractions.Repositories;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public sealed class NoteRepository(AppDbContext context) : INoteRepository
{
    private readonly AppDbContext _context = context;

    public async Task AddAsync(string name, string content)
    {
        await _context.Notes.AddAsync(
            new NoteEntity
            {
                Name = name,
                Content = content,
                CreatedAt = DateTime.UtcNow,
            }
        );

        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        await _context.Notes.AsNoTracking().Where(x => x.Id == id).ExecuteDeleteAsync();
    }

    public async Task<IEnumerable<NoteEntity>> GetAllAsync()
    {
        return await _context.Notes.AsNoTracking().ToArrayAsync();
    }

    public async Task<NoteEntity> GetByIdAsync(Guid id)
    {
        return await _context.Notes.AsNoTracking().Where(x => x.Id == id).FirstAsync();
    }

    public async Task UpdateAsync(Guid id, string newName, string newContent)
    {
        await _context
            .Notes.Where(x => x.Id == id)
            .ExecuteUpdateAsync(s =>
            {
                s.SetProperty(x => x.Name, newName);
                s.SetProperty(x => x.Content, newContent);
            });
    }
}
