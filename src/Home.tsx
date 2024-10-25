import React from "react";
import "./Home.css"; // Import the CSS file

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-title">DFS Threat Radar</div>
      <p className="home-description">
        An all-in-one dashboard that centralizes and tracks risks, compliance
        issues, and security vulnerabilities, empowering teams to act swiftly
        and stay compliant.
      </p>
      <p className="home-paragraph">
        In a world where digital transformation accelerates daily, organizations
        face an ever-growing challenge of managing risks, compliance issues, and
        security vulnerabilities effectively. Traditional methods often involve
        disparate tools and fragmented data, making it difficult for teams to
        track and address these critical areas in a timely and unified manner.
        The need for a centralized, easily accessible solution is now more
        pressing than ever!{" "}
      </p>
      <p className="home-paragraph">
        This project proposes a comprehensive dashboard that consolidates risk
        and compliance data from various sources into a single, interactive
        platform. By fetching data on risks, compliance gaps, and
        vulnerabilities across different systems and repositories, the dashboard
        provides a holistic, real-time view of an organization’s security and
        regulatory posture. This centralization enables organizations to monitor
        potential threats proactively, respond efficiently, and maintain robust
        compliance with industry standards.{" "}
      </p>{" "}
      <p className="home-paragraph">
        Key features of this dashboard include automated data ingestion from
        multiple sources, customizable tracking metrics, and intuitive
        visualizations that transform complex risk and compliance data into
        actionable insights. The platform is designed to enhance team
        collaboration and decision-making by providing timely alerts, historical
        trend analysis, and in-depth reporting, all of which empower teams to
        take preventive actions swiftly and with confidence.{" "}
      </p>
      <p className="home-paragraph">
        By bringing these crucial elements together, this dashboard aims to
        revolutionize risk and compliance management, saving time, reducing
        operational costs, and ultimately fortifying the organization's security
        framework. With this tool, teams will have a single source of truth to
        manage, track, and mitigate risks proactively, strengthening resilience
        and ensuring peace of mind in an increasingly complex digital ecosystem.
      </p>
    </div>
  );
};

export default Home;
