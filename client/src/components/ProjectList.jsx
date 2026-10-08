
function ProjectList({ projects, onSelectProject, selectedProjectId }) {

  return (
    <div className="section-card">
      <h2>All Projects</h2>

      <p className="section-subtitle">
        View your projects and manage their members.
      </p>

      {projects.length === 0 ? (
        <p className="empty-message">
          No projects found. Create your first project!
        </p>
      ) : (
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project._id}
              className={`project-item ${
                selectedProjectId === project._id ? "selected" : ""
              }`}
            >
              <div className="project-header">
                <h3>{project.name}</h3>

                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-lead">
                <strong>Project Lead:</strong>{" "}
                {project.project_lead_id
                  ? `${project.project_lead_id.f_name} ${project.project_lead_id.l_name}`
                  : "Unknown"}
              </p>

              <button
                type="button"
                className="manage-button"
                onClick={() => onSelectProject(project)}
              >
                Manage Members
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;
