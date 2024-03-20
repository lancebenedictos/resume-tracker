import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import ResumeInfo, {
  Award,
  Education,
  JobExperience,
  Project,
} from "@/models/ResumeInfo";
import User from "@/models/User";
import { FileChild } from "node_modules/docx/build/file/file-child";

export class DocumentCreator {
  public create(resume: ResumeInfo, user: User): Document {
    const sections = [
      ...this.createSkills(resume.skills),
      ...this.createEducation(resume.education),
      ...this.createExperience(resume.job_experience),
      ...this.createAwards(resume.awards),
      ...this.createProjects(resume.projects),
      ...this.createLanguages(resume.languages),
    ];

    return new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: `1in`,
                bottom: `1in`,
                left: `1in`,
                right: `1in`,
              },
            },
          },
          children: [
            new Paragraph({
              text: `${user.personal_info.first_name} ${user.personal_info.last_name}`,
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
            }),

            this.createContactInfo(
              user.personal_info.phone_number,
              user.personal_info?.linkedIn || "",
              user.personal_info.email,
              user.personal_info.location,
              user.personal_info.portfolio
            ),

            new Paragraph({
              text: resume.summary,
              spacing: {
                after: 200,
              },
              alignment: AlignmentType.JUSTIFIED,
            }),

            ...sections,
          ],
        },
      ],
    });
  }

  public createContactInfo(
    phoneNumber: string,
    profileUrl: string,
    email: string,
    location: string,
    portfolio: string
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: {
        after: 200,
      },
      children: [
        new TextRun(`${location} | ${phoneNumber}  | ${email}`),
        new TextRun({
          text: `${profileUrl} | ${portfolio}`,
          break: 1,
        }),
      ],
    });
  }

  public createEducation(education?: Education[]): FileChild[] {
    if (education && education.length > 0) {
      const elements: FileChild[] = [this.createHeading("Education")];

      education.forEach((ed, index) => {
        elements.push(
          new Table({
            borders: {
              bottom: { style: "none" },
              top: { style: "none" },
              left: { style: "none" },
              right: { style: "none" },
              insideHorizontal: { style: "none" },
              insideVertical: { style: "none" },
            },
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: ed.degree, bold: true }),
                          new TextRun(`, ${ed.institution}`),
                        ],
                      }),
                    ],
                    width: {
                      size: 90,
                      type: WidthType.PERCENTAGE,
                    },
                  }),

                  new TableCell({
                    width: {
                      size: 50,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: ed.graduation_year,
                        alignment: AlignmentType.END,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        ed.info.forEach((info) => {
          elements.push(new Paragraph({ text: info, bullet: { level: 0 } }));
        });

        if (index !== education.length - 1) elements.push(new Paragraph(""));
      });

      return elements;
    }

    return [];
  }

  public createSkills(skills: string[]): FileChild[] {
    if (skills && skills.length > 0) {
      const elements: FileChild[] = [this.createHeading("Skills")];
      const text = skills.join(", ");
      elements.push(new Paragraph(text));
      elements.push(new Paragraph(""));

      return elements;
    }

    return [];
  }

  public createLanguages(languages: string[]): FileChild[] {
    if (languages && languages.length > 0) {
      const elements: FileChild[] = [this.createHeading("Languages")];
      const text = languages.join(", ");
      elements.push(new Paragraph(text));
      elements.push(new Paragraph(""));

      return elements;
    }

    return [];
  }
  public createExperience(experiences?: JobExperience[]): FileChild[] {
    if (experiences && experiences.length > 0) {
      const elements: FileChild[] = [this.createHeading("Experience")];

      experiences.forEach((exp, index) => {
        elements.push(
          new Table({
            borders: {
              bottom: { style: "none" },
              top: { style: "none" },
              left: { style: "none" },
              right: { style: "none" },
              insideHorizontal: { style: "none" },
              insideVertical: { style: "none" },
            },
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: exp.title, bold: true }),
                        ],
                      }),
                    ],
                    width: {
                      size: 70,
                      type: WidthType.PERCENTAGE,
                    },
                  }),

                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: `${exp.start_date} - ${
                          exp.end_date || "Present"
                        }`,
                        alignment: AlignmentType.END,
                      }),
                    ],
                  }),
                ],
              }),

              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: exp.company, bold: true }),
                          new TextRun({ text: `, ${exp.location}` }),
                        ],
                      }),
                    ],
                    width: {
                      size: 70,
                      type: WidthType.PERCENTAGE,
                    },
                  }),
                ],
              }),
            ],
          })
        );

        exp.responsibilities.forEach((resp) => {
          elements.push(new Paragraph({ text: resp, bullet: { level: 0 } }));
        });

        if (index !== experiences.length - 1) elements.push(new Paragraph(""));
      });

      return elements;
    }

    return [];
  }

  public createAwards(awards?: Award[]): FileChild[] {
    if (awards && awards.length > 0) {
      const elements: FileChild[] = [this.createHeading("Awards")];

      awards.forEach((award) => {
        elements.push(
          new Table({
            borders: {
              bottom: { style: "none" },
              top: { style: "none" },
              left: { style: "none" },
              right: { style: "none" },
              insideHorizontal: { style: "none" },
              insideVertical: { style: "none" },
            },
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: award.title, bold: true }),
                        ],
                      }),
                    ],
                    width: {
                      size: 70,
                      type: WidthType.PERCENTAGE,
                    },
                  }),

                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: award.year,
                        alignment: AlignmentType.END,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        elements.push(new Paragraph(award.description));
      });
      return elements;
    }

    return [];
  }

  public createProjects(projects?: Project[]): FileChild[] {
    if (projects && projects.length > 0) {
      const elements: FileChild[] = [this.createHeading("Projects")];

      projects.forEach((project, index) => {
        elements.push(
          new Table({
            borders: {
              bottom: { style: "none" },
              top: { style: "none" },
              left: { style: "none" },
              right: { style: "none" },
              insideHorizontal: { style: "none" },
              insideVertical: { style: "none" },
            },
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: project.name, bold: true }),
                        ],
                      }),
                    ],
                    width: {
                      size: 70,
                      type: WidthType.PERCENTAGE,
                    },
                  }),

                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: project.year,
                        alignment: AlignmentType.END,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        if (project.details) elements.push(new Paragraph(project.details));

        if (index !== projects.length - 1) elements.push(new Paragraph(""));
      });
      return elements;
    }

    return [];
  }

  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
      spacing: { before: 200 },
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
    });
  }

  public getMonthFromInt(value: number): string {
    switch (value) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sept";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "N/A";
    }
  }
}
