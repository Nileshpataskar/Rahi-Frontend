"use client";
import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import { motion } from "framer-motion";

export const teamData: TeamType[] = [
  {
    id: 1,
    name: "Rajesh Kulkarni",
    designation: "Managing Director",
    image: "/images/team/team-01.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Neha Sharma",
    designation: "Head of Engineering",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Amit Verma",
    designation: "Lead Product Designer",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Pooja Deshmukh",
    designation: "Marketing & Communications",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-muted/30 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <motion.div
          className="mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <SectionTitle
            title=" Leadership Team"
            paragraph="Meet the experts driving our vision forward"
            width="640px"
            center
          />
        </motion.div>

        <motion.div
          className="-mx-4 flex flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
