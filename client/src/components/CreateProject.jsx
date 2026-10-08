
import { useState } from "react";

const API_URL = "http://localhost:5000";

function CreateProject({ users, onProjectCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Planning",
    project_lead_id: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.description.trim() ||
      !formData.project_lead_id
    ) {
      setMessage("Please fill in all fields");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      setMessage(data.message);
      setMessageType(response.ok ? "success" : "error");

      if (response.ok) {
        setFormData({
          name: "",
          description: "",
          status: "Planning",
          project_lead_id: ""
        });

        if (onProjectCreated) {
          await onProjectCreated();
        }
      }
    } catch (error) {
      console.error(error);
      setMessage("Could not connect to server");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section-card">
      <h2>Create New Project</h2>
      <p className="section-subtitle">
        Enter the details to create a software project.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="project-name">Project Name</label>
          <input
            id="project-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter project name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="project-description">
            Description
          </label>
          <textarea
            id="project-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows="4"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="project-status">Status</label>
          <select
            id="project-status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Planning">Planning</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="project-lead">Project Lead</label>
          <select
            id="project-lead"
            name="project_lead_id"
            value={formData.project_lead_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a registered user</option>

            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.f_name} {user.l_name} ({user.username})
              </option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Project"}
        </button>

        {message && (
          <p className={`message ${messageType}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default CreateProject;
