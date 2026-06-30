import React, { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard';

const App = () => {
  const [projects, setProjects] = useState(() => {
    const time = localStorage.getItem("Data")
    return time ? JSON.parse(time) : [
      {
        id: "proj-001",
        clientName: "Alex Mercer",
        clientAvatar: "https://i.pravatar.cc/150?img=11",
        projectTitle: "E-Commerce Dashboard",
        hourlyRate: 35,
        totalHoursLogged: 120,
        status: "Active"
      },
      {
        id: "proj-002",
        clientName: "Sophia Lin",
        clientAvatar: "https://i.pravatar.cc/150?img=26",
        projectTitle: "Mobile Fitness App",
        hourlyRate: 50,
        totalHoursLogged: 85,
        status: "Completed"
      },
      {
        id: "proj-003",
        clientName: "David Miller",
        clientAvatar: "https://i.pravatar.cc/150?img=33",
        projectTitle: "Real Estate Landing Page",
        hourlyRate: 40,
        totalHoursLogged: 45,
        status: "Active"
      },
      {
        id: "proj-004",
        clientName: "Emma Watson",
        clientAvatar: "https://i.pravatar.cc/150?img=47",
        projectTitle: "SaaS Analytics Platform",
        hourlyRate: 60,
        totalHoursLogged: 210,
        status: "Active"
      },
      {
        id: "proj-005",
        clientName: "Liam Neeson",
        clientAvatar: "https://i.pravatar.cc/150?img=68",
        projectTitle: "AI Chatbot Integration",
        hourlyRate: 45,
        totalHoursLogged: 30,
        status: "Completed"
      },
      {
        id: "proj-006",
        clientName: "Olivia Wilde",
        clientAvatar: "https://i.pravatar.cc/150?img=49",
        projectTitle: "Portfolio Website",
        hourlyRate: 25,
        totalHoursLogged: 15,
        status: "Completed"
      },
      {
        id: "proj-007",
        clientName: "Noah Centineo",
        clientAvatar: "https://i.pravatar.cc/150?img=12",
        projectTitle: "JobFinder Portal",
        hourlyRate: 40,
        totalHoursLogged: 165,
        status: "Active"
      },
      {
        id: "proj-008",
        clientName: "Ava Max",
        clientAvatar: "https://i.pravatar.cc/150?img=43",
        projectTitle: "Crypto Wallet UI",
        hourlyRate: 55,
        totalHoursLogged: 70,
        status: "Active"
      },
      {
        id: "proj-009",
        clientName: "Ethan Hunt",
        clientAvatar: "https://i.pravatar.cc/150?img=13",
        projectTitle: "Task Management Tool",
        hourlyRate: 35,
        totalHoursLogged: 95,
        status: "Completed"
      },
      {
        id: "proj-010",
        clientName: "Isabella Swan",
        clientAvatar: "https://i.pravatar.cc/150?img=53",
        projectTitle: "Agency Landing Page",
        hourlyRate: 30,
        totalHoursLogged: 40,
        status: "Active"
      },
      {
        id: "proj-011",
        clientName: "James Bond",
        clientAvatar: "https://i.pravatar.cc/150?img=14",
        projectTitle: "Cybersecurity Dashboard",
        hourlyRate: 75,
        totalHoursLogged: 140,
        status: "Active"
      },
      {
        id: "proj-012",
        clientName: "Mia Khalifa",
        clientAvatar: "https://i.pravatar.cc/150?img=34",
        projectTitle: "Recipe & Food Blog",
        hourlyRate: 20,
        totalHoursLogged: 25,
        status: "Completed"
      },
      {
        id: "proj-013",
        clientName: "Lucas Scott",
        clientAvatar: "https://i.pravatar.cc/150?img=18",
        projectTitle: "Learning Management System",
        hourlyRate: 50,
        totalHoursLogged: 180,
        status: "Active"
      },
      {
        id: "proj-014",
        clientName: "Lily Collins",
        clientAvatar: "https://i.pravatar.cc/150?img=35",
        projectTitle: "Fashion E-commerce",
        hourlyRate: 45,
        totalHoursLogged: 110,
        status: "Completed"
      },
      {
        id: "proj-015",
        clientName: "Ryan Reynolds",
        clientAvatar: "https://i.pravatar.cc/150?img=60",
        projectTitle: "Marketing Agency Site",
        hourlyRate: 65,
        totalHoursLogged: 55,
        status: "Active"
      }
    ]
  });

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(projects))
  }, [projects])

  return (
    <div>
      <Dashboard project={projects} />
    </div>
  )
}

export default App;