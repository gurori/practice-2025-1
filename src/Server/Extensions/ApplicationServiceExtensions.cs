using Application.Abstractions.Repositories;
using Application.Abstractions.Services;
using Application.Services;
using DataAccess.Repositories;

namespace Server.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<INoteRepository, NoteRepository>();

        return services;
    }

    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddScoped<INoteService, NoteService>();

        return services;
    }
}
