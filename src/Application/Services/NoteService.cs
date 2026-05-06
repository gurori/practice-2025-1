using Application.Abstractions.Repositories;
using Application.Abstractions.Services;
using Domain.Entities;
using Domain.Models.Notes;

namespace Application.Services;

public sealed class NoteService(INoteRepository noteRepository) : INoteService
{
    private readonly INoteRepository _noteRepository = noteRepository;

    public async Task AddAsync(NoteRequest request)
    {
        await _noteRepository.AddAsync(request.Name, request.Content);
    }

    public async Task DeleteAsync(Guid id)
    {
        await _noteRepository.DeleteAsync(id);
    }

    public async Task<NoteEntity> GetAsync(Guid id)
    {
        return await _noteRepository.GetByIdAsync(id);
    }

    public async Task<IEnumerable<NoteEntity>> GetAsync()
    {
        return await _noteRepository.GetAllAsync();
    }

    public async Task UpdateAsync(UpdateNoteRequest request)
    {
        await _noteRepository.UpdateAsync(request.Id, request.NewName, request.NewContent);
    }
}
