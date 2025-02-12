import React from 'react';
import { Mail, Phone, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Kuldeepsinh Vaghela</h1>
                <div className="flex gap-6 text-gray-600 mt-4">
                  <a href="mailto:kv.dataengineer@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
                    <Mail size={18} />
                    kv.dataengineer@gmail.com
                  </a>
                  <a href="https://github.com/Kuldeepsinh-Vaghela" className="flex items-center gap-2 hover:text-blue-600">
                    <Github size={18} />
                    GitHub
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    +1 (437) 981-5725
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Data Engineering"
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Objective Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Objective</h2>
          <p className="text-gray-600">
            Seeking a challenging position as a Data Engineer where I can leverage my expertise in data pipeline development,
            cloud computing, and database management to drive data-driven solutions and business growth.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-600">Python, SQL, Java, JavaScript, Shell Scripting</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cloud & Big Data</h3>
              <p className="text-gray-600">AWS, Hadoop, Spark, Kafka, Airflow</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Databases</h3>
              <p className="text-gray-600">PostgreSQL, MySQL, MongoDB, Cassandra</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools & Technologies</h3>
              <p className="text-gray-600">Git, Docker, Kubernetes, Linux</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Tech Stack"
            className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
          />
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold">Data Engineer - ABC Technologies</h3>
              <p className="text-gray-500 text-sm mb-2">Jan 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Developed and maintained ETL pipelines processing 10TB+ data daily</li>
                <li>Implemented data quality checks reducing errors by 40%</li>
                <li>Optimized Spark jobs improving performance by 30%</li>
              </ul>
              {/* Architecture Diagram 1 */}
              <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-4">ETL Pipeline Architecture</h4>
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-600 text-white p-4 rounded-lg">Data Sources</div>
                      <div className="text-sm mt-2">APIs • Databases • Files</div>
                    </div>
                    <div className="text-blue-600">→</div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-600 text-white p-4 rounded-lg">Apache Kafka</div>
                      <div className="text-sm mt-2">Real-time Ingestion</div>
                    </div>
                    <div className="text-blue-600">→</div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-600 text-white p-4 rounded-lg">Spark Processing</div>
                      <div className="text-sm mt-2">Data Transformation</div>
                    </div>
                    <div className="text-blue-600">→</div>
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-600 text-white p-4 rounded-lg">Data Warehouse</div>
                      <div className="text-sm mt-2">Storage & Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Data Analyst - XYZ Corp</h3>
              <p className="text-gray-500 text-sm mb-2">Jun 2020 - Dec 2021</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Created dashboards and reports using Power BI</li>
                <li>Performed data analysis identifying key business insights</li>
                <li>Automated reporting processes saving 10 hours weekly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Real-time Data Pipeline</h3>
              <p className="text-gray-600 mb-4">
                Built a scalable data pipeline using Kafka and Spark Streaming for real-time analytics.
              </p>
              <div className="text-sm text-gray-500 mb-6">Python • Kafka • Spark • AWS</div>
              {/* Architecture Diagram 2 */}
              <div className="bg-green-50 p-8 rounded-lg relative">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-col items-center group">
                    <div className="bg-green-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      IoT Devices
                    </div>
                    <div className="text-sm mt-2">Sensor Data</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      Devices that collect real-time sensor data.
                    </div>
                  </div>
                  <div className="text-green-600">→</div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-green-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      Kafka Cluster
                    </div>
                    <div className="text-sm mt-2">Message Queue</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      Manages the message flow between devices and processing.
                    </div>
                  </div>
                  <div className="text-green-600">→</div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-green-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      Spark Streaming
                    </div>
                    <div className="text-sm mt-2">Real-time Processing</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      Processes data in real-time for immediate insights.
                    </div>
                  </div>
                  <div className="text-green-600">→</div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-green-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      Analytics Dashboard
                    </div>
                    <div className="text-sm mt-2">Real-time Insights</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      Displays real-time analytics and insights from the data.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Data Warehouse Migration</h3>
              <p className="text-gray-600 mb-4">
                Migrated on-premise data warehouse to cloud reducing costs by 40%.
              </p>
              <div className="text-sm text-gray-500 mb-6">AWS Redshift • Python • Airflow</div>
              {/* Architecture Diagram 3 */}
              <div className="bg-purple-50 p-8 rounded-lg relative">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-col items-center group">
                    <div className="bg-purple-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      Legacy DW
                    </div>
                    <div className="text-sm mt-2">On-premise</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      The original on-premise data warehouse.
                    </div>
                  </div>
                  <div className="text-purple-600">→</div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-purple-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      AWS S3
                    </div>
                    <div className="text-sm mt-2">Data Lake</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      A scalable storage solution for raw data.
                    </div>
                  </div>
                  <div className="text-purple-600">→</div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-purple-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      AWS Redshift
                    </div>
                    <div className="text-sm mt-2">Cloud DW</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      The cloud-based data warehouse for analytics.
                    </div>
                  </div>
                  <div className="text-purple-600">→</div>
                  <div className="flex flex-col items-center group">
                    <div className="bg-purple-600 text-white p-4 rounded-lg transition-transform transform group-hover:scale-105 cursor-pointer">
                      BI Tools
                    </div>
                    <div className="text-sm mt-2">Analytics</div>
                    <div className="absolute hidden group-hover:block bg-white p-2 border border-gray-300 rounded shadow-lg">
                      Tools used for business intelligence and reporting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <div>
            <h3 className="font-semibold">Master of Science in Data Analytics</h3>
            <p className="text-gray-500">University of Toronto • 2020</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Education"
            className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
          />
        </section>
      </main>
    </div>
  );
}

export default App;