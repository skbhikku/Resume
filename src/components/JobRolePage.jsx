/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Worker } from '@react-pdf-viewer/core';
import { motion } from 'framer-motion';
import { jobRoles, extractTextFromPDF, analyzeResume } from './resumeAnalysis';
import '../Style/JobRolePage.css';

function JobRolePage() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      setLoading(true);
      try {
        const text = await extractTextFromPDF(acceptedFiles[0]);
        const analysisResult = analyzeResume(text);
        setAnalysis(analysisResult);
        setFile(acceptedFiles[0]);
      } catch (error) {
        console.error('Error processing PDF:', error);
      }
      setLoading(false);
    },
  });

  return (
    <div className="JobRolePage">
      <div className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-content">
              <h1 className="hero-title">Smart Resume Analyzer</h1>
              <p className="hero-subtitle">
                Upload your resume to discover your best-matched tech roles
              </p>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {loading ? (
                  <div className="loader">Analyzing Resume...</div>
                ) : (
                  <>
                    <button className="upload-btn">
                      <span className="file-icon">📄</span> Upload PDF Resume
                    </button>
                    {!file && (
                      <div className="upload-info">
                        <div className="info-box">
                          <div className="info-item">
                            <span className="info-icon">✅</span>
                            <span>PDF files only (max 5MB)</span>
                          </div>
                          <div className="info-item">
                            <span className="info-icon">⚡</span>
                            <span>Smart Resume Analyzer</span>
                          </div>
                          <div className="info-item">
                            <span className="info-icon">🛡️</span>
                            <span>Secure & confidential processing</span>
                          </div>
                        </div>
                        <p className="support-text">
                          We analyze your resume for key skills, experience, and qualifications to match you with ideal tech roles.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {analysis && (
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="analysis">
              <h2 className="section-title">Analysis Summary</h2>
              <div className="summary-grid">
                <div className="summary-card">
                  <h6>Total Skills Found</h6>
                  <h3>{analysis.totalSkills}</h3>
                </div>
                <div className="summary-card">
                  <h6>Top Matching Roles</h6>
                  <div className="chip-container">
                    {analysis.topRoles.map((role, index) => (
                      <div key={index} className="chip">
                        <div className="avatar" style={{ backgroundColor: role.color }}>
                          {role.icon}
                        </div>
                        <span>{role.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="section-title">Recommended Roles (Fresher Salaries)</h2>
              <div className="roles-grid">
                {analysis.roles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="role-card" style={{ borderLeft: `4px solid ${role.color}` }}>
                      <div className="role-card-header">
                        <div className="avatar" style={{ backgroundColor: role.color }}>
                          {role.icon}
                        </div>
                        <div className="role-title-wrapper">
                          <h3>{role.title}</h3>
                          <div className="salary-range">
                            <span className="salary-pill avg">
                              Avg: {role.salary.avg}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="role-card-content">
                        <div className="salary-info">
                          <div className="salary-item">
                            <span className="label">Entry Level:</span>
                            <span className="value low">{role.salary.low}</span>
                          </div>
                          <div className="salary-item">
                            <span className="label">High End:</span>
                            <span className="value high">{role.salary.high}</span>
                          </div>
                        </div>

                        <div className="role-skills">
                          <h4 className="role-section-title">
                            Matching Skills ({role.matchedSkills.length}/{role.skills.length})
                          </h4>
                          <div className="skill-chip-container">
                            {role.matchedSkills.map((skill, i) => (
                              <div key={i} className="skill-chip success">
                                <span className="icon">✔</span> {skill}
                              </div>
                            ))}
                          </div>
                        </div>

                        {role.missingSkills.length > 0 && (
                          <div className="role-skills">
                            <h4 className="role-section-title">Skills to Improve</h4>
                            <div className="skill-chip-container">
                              {role.missingSkills.map((skill, i) => (
                                <div key={i} className="skill-chip error">
                                  <span className="icon">✖</span> {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" />
    </div>
  );
}

export default JobRolePage;