import React, { useState } from "react";
import membersData from "./data.json";
import "./dashboard.css";
import Table from "./components/Table";
import Dropdown from "./components/Dropdown";
import handShake from "../src/Images/handshake.png"
import pending from "../src/Images/expired.png"
import approved from "../src/Images/check-mark.png"
import rejected from "../src/Images/decline.png"
import unique from "../src/Images/think-outside-the-box.png"
import duplicate from "../src/Images/duplicate.png"

const Dashboard = () => {
    const [team, setTeam] = useState("");
    const [dateRange, setDateRange] = useState("today");
    const [sortBy, setSortBy] = useState("AtoZ");

    const handleMemberClick = (memberId) => {
        console.log("Member clicked:", memberId);
    };

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    const filteredMembers = membersData.memberDetails.filter((member) => {
        return team ? member.team === team : true;
    });

    // Sort members
    const sortedMembers = filteredMembers.sort((a, b) => {
        if (sortBy === "AtoZ") {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    const filteredByDateRange = sortedMembers.filter((member) => {
        return true;
    });

    let totalOnboarding = 0;
    for (const member of filteredByDateRange) {
        totalOnboarding += member.totalOnboarding
    }
    let totalPending = 0;
    for (const member of filteredByDateRange) {
        totalPending += member.pending;
    }

    let totalApproved = 0;
    for (const member of filteredByDateRange) {
        totalApproved += member.approved;
    }

    let totalRejected = 0;
    for (const member of filteredByDateRange) {
        totalRejected += member.rejected;
    }

    let totalUnique = 0;
    for (const member of filteredByDateRange) {
        totalUnique += member.unique;
    }

    let totalDuplicate = 0;
    for (const member of filteredByDateRange) {
        totalDuplicate += member.duplicate;
    }

    // Dropdown options
    const teamOptions = [
        { value: "", label: "Select Team" },
        { value: "Tech", label: "Technical Team" },
        { value: "Management", label: "Management Team" },
        { value: "BD", label: "BD Team" },
    ];

    const dateRangeOptions = [
        { value: "today", label: "Today" },
        { value: "last7days", label: "Last 7 Days" },
        { value: "thisMonth", label: "This Month" },
        { value: "custom", label: "Custom Date" },
    ];

    const sortByOptions = [
        { value: "AtoZ", label: "A to Z" },
        { value: "ZtoA", label: "Z to A" },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-count">
                <div className="count">
                    <img src={handShake} alt="" />
                    Total Onboarding: {totalOnboarding}
                </div>
                <div className="count">
                    <img src={pending} alt="" />
                    Total Pending: {totalPending}
                </div>
                <div className="count">
                    <img src={approved} alt="" />
                    Total Approved: {totalApproved}
                </div>
            </div>

            <div className="dashboard-count">
                <div className="count">
                    <img src={rejected} alt="" />
                    Total Rejected: {totalRejected}
                </div>
                <div className="count">
                    <img src={unique} alt="" />
                    Total Unique: {totalUnique}
                </div>
                <div className="count">
                    <img src={duplicate} alt="" />
                    Total Duplicate: {totalDuplicate}
                </div>
            </div>

            <div className="dashboard-header">
                <p>Team Overview</p>
                <div className="dashboard-dropdowns">
                    <Dropdown
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                        options={teamOptions}
                    />
                    <Dropdown
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        options={dateRangeOptions}
                    />
                    <Dropdown
                        value={sortBy}
                        onChange={(e) => handleSortChange(e.target.value)}
                        options={sortByOptions}
                    />
                </div>
            </div>

            <Table data={sortedMembers} handleMemberClick={handleMemberClick} />
        </div>
    );
};

export default Dashboard;
