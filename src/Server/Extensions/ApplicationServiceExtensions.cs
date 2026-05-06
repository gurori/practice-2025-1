using Application.Abstractions.Repositories;
using DataAccess.Repositories;

namespace Server.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<INoteRepository, NoteRepository>();

        return services;
    }

    public static IServiceCollection AddService(this IServiceCollection services)
    {
        return services;
    }
}
