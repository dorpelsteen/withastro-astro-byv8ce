import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProjectDetail } from '../components/Portfolio/ProjectDetail';
import { projects } from '../data/projects';

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <main className="pt-20">
      <ProjectDetail project={project} />
    </main>
  );
}