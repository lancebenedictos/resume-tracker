function Preview() {
  return (
    <div className="font-sans leading-6 m-4 md:m-8 lg:m-12 xl:m-16">
      <header className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Your Full Name</h1>
        <p className="text-gray-600">
          Your Address | Your Phone Number | Your Email
        </p>
      </header>

      <section className="border-b pb-2 mb-4">
        <h2 className="text-xl font-bold mb-2">Objective</h2>
        <p>Concise and specific career objective</p>
      </section>

      <section className="border-b pb-2 mb-4">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p>Highlight key skills and qualifications in a brief paragraph</p>
      </section>

      <section className="border-b pb-2 mb-4">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p>Degree Earned, e.g., Bachelor of Science in Computer Science</p>
        <p>University Name, Graduation Date</p>
        <p>Relevant coursework or academic achievements</p>
      </section>

      {/* ... (other sections) */}

      <section className="border-b pb-2 mb-4">
        <h2 className="text-xl font-bold mb-2">References</h2>
        <p>Available upon request.</p>
      </section>
    </div>
  );
}

export default Preview;
