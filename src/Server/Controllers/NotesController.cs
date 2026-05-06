using Application.Abstractions.Services;
using Domain.Models.Notes;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class NotesController(INoteService noteService) : ControllerBase
{
    private readonly INoteService _noteService = noteService;

    [HttpPost]
    public async Task<IActionResult> Create(NoteRequest request)
    {
        await _noteService.AddAsync(request);

        return Ok();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(Guid id)
    {
        var note = await _noteService.GetAsync(id);

        return Ok(note);
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var notes = await _noteService.GetAsync();

        return Ok(notes);
    }

    [HttpPut]
    public async Task<IActionResult> Update(UpdateNoteRequest request)
    {
        await _noteService.UpdateAsync(request);

        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _noteService.DeleteAsync(id);

        return Ok();
    }
}
