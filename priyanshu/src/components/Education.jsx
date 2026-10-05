import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Qualifications
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full bg-background overflow-hidden rounded-md text-left"
              initialExpandedItems={["Education", "LPU", "STS", "Certifications", "Oracle", "GFG", "IBM"]}
            >
              <Folder element="Education" value="Education">
                <Folder element="Lovely Professional University" value="LPU">
                  <File value="LPU-BTech">
                    <p>B.Tech in Computer Science and Engineering (2024 – Present)</p>
                  </File>
                  <File value="LPU-CGPA">
                    <p>CGPA: 9.01</p>
                  </File>
                </Folder>
                <Folder element="Saint Teresa's School, Bhagalpur" value="STS">
                  <File value="STS-Inter">
                    <p>Intermediate (2022 – 2023)</p>
                  </File>
                  <File value="STS-Score">
                    <p>Percentage: 80.20%</p>
                  </File>
                </Folder>
              </Folder>
              <Folder element="Certifications" value="Certifications">
                <Folder element="Oracle" value="Oracle">
                  <File value="Oracle-AI">
                    <p>Oracle Cloud Infrastructure AI Foundations Associate (2026)</p>
                  </File>
                  <File value="Oracle-Data">
                    <p>Oracle Data Platform Foundations Associate (2026)</p>
                  </File>
                </Folder>
                <Folder element="GeeksforGeeks" value="GFG">
                  <File value="GFG-Bootcamp">
                    <p>Full Stack Developer Bootcamp (2025)</p>
                  </File>
                </Folder>
                <Folder element="IBM SkillsBuild" value="IBM">
                  <File value="IBM-FrontEnd">
                    <p>Front-End Development (2025)</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}