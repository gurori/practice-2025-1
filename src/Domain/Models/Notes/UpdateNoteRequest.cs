namespace Domain.Models.Notes;

public record UpdateNoteRequest(Guid Id, string NewName, string NewContent);
