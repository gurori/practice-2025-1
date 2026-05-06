namespace Domain.Entities;

public class NoteEntity : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
