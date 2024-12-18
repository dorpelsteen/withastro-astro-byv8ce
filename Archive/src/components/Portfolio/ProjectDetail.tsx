import React from 'react';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types/project';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      let videoId = '';

      // Check for common YouTube URL patterns
      if (urlObj.hostname === 'youtu.be') {
        // Shortened URL
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes('youtube.com')) {
        // Standard YouTube URL with 'v' parameter
        videoId = urlObj.searchParams.get('v') || '';
      }

      // Return embed URL if videoId is found
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (error) {
      console.error('Invalid YouTube URL:', error);
    }

    // Return an empty string if URL is invalid
    return '';
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            {project.videoUrl ? (
              <div className="aspect-w-16">
                <iframe
                  src={getYouTubeEmbedUrl(project.videoUrl)}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-lg shadow-lg w-full"
              />
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-600">{project.fullDescription}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Role</h3>
              <p className="text-gray-600">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional External Link Button */}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <ExternalLink size={18} />
                Visit Website
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Goals</h2>
            <ul className="space-y-4">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <span className="text-gray-600">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Achievements</h2>
            <ul className="space-y-4">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.images.length > 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="rounded-lg shadow-md w-full"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
