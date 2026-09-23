import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import StandardCTA from '../../components/StandardCTA';

// Reusing the same blog posts data from blogs page
export async function generateStaticParams() {
  const blogPosts = [
    { id: "on-site-technology-consultation" },
    { id: "keep-technology-running-smoothly" },
    { id: "improving-home-wifi-stability" },
    { id: "tv-installation-guide" },
    { id: "common-printer-performance-issues" },
    { id: "computer-system-care" },
    { id: "smart-home-device-maintenance-guide" },
  ];

  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

const blogPosts = [
  {
    id: "on-site-technology-consultation",
    title: "What to Expect During an On-Site Technology Service Consultation",
    excerpt: "Technology and appliances have become part of everyday routines, supporting work, communication, entertainment, and household responsibilities. When a computer slows down, a printer refuses to connect, a network becomes unreliable, or a household appliance begins to show signs of inconsistent performance, it can disrupt daily activities and cause unnecessary inconvenience. In many situations, an on-site service consultation provides a practical way to understand the issue before deciding on the next steps.",
    image: "/k-hub1.png",
    date: "July 10, 2026",
    readTime: "6 min read",
    category: "Service Guide",
    content: `
      <p>Technology and appliances have become part of everyday routines, supporting work, communication, entertainment, and household responsibilities. When a computer slows down, a printer refuses to connect, a network becomes unreliable, or a household appliance begins to show signs of inconsistent performance, it can disrupt daily activities and cause unnecessary inconvenience. In many situations, an on-site service consultation provides a practical way to understand the issue before deciding on the next steps.</p>
      
      <h3>1. Initial Contact & Information Gathering</h3>
      <p>Our process begins when you reach out to us via phone, email, or our appointment form. We'll ask you a few simple questions about your equipment, the issues you're experiencing, and your location. This helps us prepare for the consultation and ensures we bring any necessary tools or resources.</p>
      
      <h3>2. Scheduling a Convenient Time</h3>
      <p>We understand you have a busy schedule, so we work with you to find a time that fits your needs. Whether you prefer an early morning, afternoon, or evening appointment, we strive to accommodate your schedule whenever possible.</p>
      
      <h3>3. On-Site Assessment</h3>
      <p>Our technician will arrive at your location at the scheduled time. They will greet you, introduce themselves, and then begin assessing your equipment. This assessment may include:</p>
      <ul>
        <li>Visual inspection of the equipment</li>
        <li>Testing functionality and performance</li>
        <li>Checking connections and settings</li>
        <li>Asking you questions about the issues you've been experiencing</li>
      </ul>
      
      <h3>4. Discussion of Findings & Options</h3>
      <p>After completing the assessment, our technician will explain their findings to you in clear, easy-to-understand language. They will also discuss the available service options, including any recommendations, estimated costs, and timelines.</p>
      
      <h3>5. Decision & Next Steps</h3>
      <p>You'll have time to consider the options and ask any additional questions you may have. Once you decide how you'd like to proceed, we'll either complete the service (if possible during the same visit) or schedule a follow-up appointment if needed.</p>
    `
  },
  {
    id: "keep-technology-running-smoothly",
    title: "Simple Ways to Keep Home and Office Technology Running Smoothly",
    excerpt: "Technology supports nearly every part of modern life. From computers used for work and education to printers, Wi-Fi networks, smart home devices, and office equipment, reliable performance often depends on consistent care rather than waiting for problems to appear. While no device can operate perfectly forever, a few practical habits can help reduce interruptions and support everyday productivity.",
    image: "/k-hub2.png",
    date: "July 8, 2026",
    readTime: "5 min read",
    category: "Maintenance",
    content: `
      <p>Technology supports nearly every part of modern life. From computers used for work and education to printers, Wi-Fi networks, smart home devices, and office equipment, reliable performance often depends on consistent care rather than waiting for problems to appear. While no device can operate perfectly forever, a few practical habits can help reduce interruptions and support everyday productivity.</p>
      
      <h3>1. Keep Your Software Updated</h3>
      <p>Regularly installing software updates is one of the simplest and most effective ways to keep your devices running smoothly. Updates often include important security patches, bug fixes, and performance improvements.</p>
      
      <h3>2. Maintain Good Ventilation</h3>
      <p>Electronic devices generate heat, and proper ventilation is essential for preventing overheating. Make sure your computer, printer, and other devices have enough space around them for air to circulate.</p>
      
      <h3>3. Clean Your Devices Regularly</h3>
      <p>Dust and debris can accumulate inside your devices and cause performance issues or even damage over time. Clean your devices regularly using appropriate methods and tools.</p>
      
      <h3>4. Back Up Your Data</h3>
      <p>Regular data backups are essential for protecting your important files and documents. Consider using an external hard drive, cloud storage, or both for extra security.</p>
      
      <h3>5. Organize Your Cables</h3>
      <p>A tangled mess of cables not only looks messy but can also cause tripping hazards and make it difficult to identify which cable goes to which device. Take a few minutes to organize your cables using cable ties or cable management solutions.</p>
    `
  },
  {
    id: "improving-home-wifi-stability",
    title: "A Practical Guide to Improving Home Wi-Fi and Network Stability",
    excerpt: "A reliable network has become just as important as electricity in many homes and workplaces. Computers, printers, televisions, smart home devices, security systems, video meetings, and online entertainment all depend on a stable connection. When the network begins slowing down or disconnecting unexpectedly, even simple daily tasks can become frustrating.",
    image: "/k-hub3.png",
    date: "July 5, 2026",
    readTime: "7 min read",
    category: "Networking",
    content: `
      <p>A reliable network has become just as important as electricity in many homes and workplaces. Computers, printers, televisions, smart home devices, security systems, video meetings, and online entertainment all depend on a stable connection. When the network begins slowing down or disconnecting unexpectedly, even simple daily tasks can become frustrating.</p>
      
      <h3>1. Router Placement Matters</h3>
      <p>Where you place your router can have a significant impact on Wi-Fi signal strength and coverage. Ideally, your router should be placed in a central location in your home or office, away from walls, metal objects, and other sources of interference.</p>
      
      <h3>2. Secure Your Network</h3>
      <p>Always use strong, unique passwords for your Wi-Fi network and router admin panel. This helps prevent unauthorized access and ensures your network is secure.</p>
      
      <h3>3. Update Your Router Firmware</h3>
      <p>Just like your computer or phone, your router needs regular updates to perform at its best. Check the manufacturer's website or your router's admin panel regularly for firmware updates.</p>
      
      <h3>4. Consider a Wi-Fi Extender or Mesh System</h3>
      <p>If you have a large home or office and are experiencing weak Wi-Fi signals in some areas, a Wi-Fi extender or mesh Wi-Fi system can help extend your network coverage.</p>
      
      <h3>5. Reduce Interference</h3>
      <p>Other electronic devices like microwaves, cordless phones, and Bluetooth devices can interfere with your Wi-Fi signal. Try to keep your router away from these devices when possible.</p>
    `
  },
  {
    id: "tv-installation-guide",
    title: "What to Know Before Installing or Mounting a Television at Home",
    excerpt: "A television often becomes the centerpiece of a living room, bedroom, office, or entertainment area. While selecting the right screen size and display technology receives plenty of attention, the installation itself plays an equally important role in creating a comfortable viewing experience. Proper planning can improve visibility, reduce cable clutter, and help the television fit naturally within the surrounding space.",
    image: "/blog-tv-mounting.png",
    date: "July 3, 2026",
    readTime: "5 min read",
    category: "Installation",
    content: `
      <p>A television often becomes the centerpiece of a living room, bedroom, office, or entertainment area. While selecting the right screen size and display technology receives plenty of attention, the installation itself plays an equally important role in creating a comfortable viewing experience. Proper planning can improve visibility, reduce cable clutter, and help the television fit naturally within the surrounding space.</p>
      
      <h3>1. Choose the Right Location</h3>
      <p>Consider factors like viewing distance, glare from windows, and the height of the TV when choosing a location. The center of the screen should ideally be at eye level when you're seated.</p>
      
      <h3>2. Select the Appropriate Mount</h3>
      <p>There are several types of TV mounts available, including fixed, tilting, and full-motion mounts. Choose one that fits your TV size, weight, and viewing needs.</p>
      
      <h3>3. Check the Wall Structure</h3>
      <p>Before drilling any holes, make sure the wall can support the weight of your TV and mount. You may need to locate wall studs or use appropriate anchors.</p>
      
      <h3>4. Plan for Cable Management</h3>
      <p>Cable clutter can detract from the clean look of a mounted TV. Consider using cable raceways, in-wall cable management solutions, or cord covers to keep cables organized and hidden.</p>
      
      <h3>5. Consider On-Site Assistance</h3>
      <p>If you're not comfortable with mounting a TV yourself, or if you have a large or heavy TV, consider hiring assistance to ensure it's installed safely and correctly.</p>
    `
  },
  {
    id: "common-printer-performance-issues",
    title: "Understanding Common Printer Performance Issues in Homes and Offices",
    excerpt: "Printers remain one of the most frequently used devices in homes, schools, and workplaces. From everyday documents and assignments to business reports and presentations, they help transform digital information into physical copies whenever needed. Like any equipment used regularly, printers may occasionally behave differently than expected. A document may take longer to print, colors may appear inconsistent, or the printer may stop communicating with a computer.",
    image: "/blog-printer-issues.png",
    date: "June 30, 2026",
    readTime: "6 min read",
    category: "Troubleshooting",
    content: `
      <p>Printers remain one of the most frequently used devices in homes, schools, and workplaces. From everyday documents and assignments to business reports and presentations, they help transform digital information into physical copies whenever needed. Like any equipment used regularly, printers may occasionally behave differently than expected. A document may take longer to print, colors may appear inconsistent, or the printer may stop communicating with a computer.</p>
      
      <h3>1. Slow Printing Speed</h3>
      <p>Slow printing can be caused by several factors, including large file sizes, high-quality print settings, or a slow network connection. Try reducing the print quality or breaking large documents into smaller parts.</p>
      
      <h3>2. Poor Print Quality</h3>
      <p>Issues like streaks, smudges, or faded prints are often caused by low ink or toner levels, clogged print heads, or dirty rollers. Try cleaning the printer or replacing the ink/toner cartridge.</p>
      
      <h3>3. Paper Jams</h3>
      <p>Paper jams are a common printer issue. They can be caused by using the wrong type of paper, overloading the paper tray, or damaged paper. Follow your printer's instructions for clearing jams safely.</p>
      
      <h3>4. Printer Not Connecting to Computer</h3>
      <p>If your printer isn't connecting to your computer, check the USB or network connection, make sure the printer is turned on, and verify that the correct drivers are installed.</p>
      
      <h3>5. Error Messages</h3>
      <p>When your printer displays an error message, refer to the user manual or manufacturer's website for troubleshooting steps. Common error messages include low ink, paper jam, or connectivity issues.</p>
    `
  },
  {
    id: "computer-system-care",
    title: "Keeping Computers Running Efficiently Through Regular System Care",
    excerpt: "Computers have become essential tools for work, education, communication, entertainment, and everyday household tasks. Whether used for managing business operations, attending virtual meetings, storing personal files, or browsing the internet, consistent performance often depends on regular care rather than reacting only when problems appear.",
    image: "/blog-computer-care.png",
    date: "June 27, 2026",
    readTime: "5 min read",
    category: "Computer Care",
    content: `
      <p>Computers have become essential tools for work, education, communication, entertainment, and everyday household tasks. Whether used for managing business operations, attending virtual meetings, storing personal files, or browsing the internet, consistent performance often depends on regular care rather than reacting only when problems appear.</p>
      
      <h3>1. Regularly Update Your Operating System and Software</h3>
      <p>Updates often include security patches, bug fixes, and performance improvements. Set your computer to install updates automatically so you don't have to remember.</p>
      
      <h3>2. Clean Up Your Hard Drive</h3>
      <p>Over time, your hard drive can become cluttered with temporary files, old downloads, and unused programs. Use disk cleanup tools to remove unnecessary files and free up space.</p>
      
      <h3>3. Install Antivirus Software</h3>
      <p>Protect your computer from viruses, malware, and other threats by installing reputable antivirus software and keeping it updated.</p>
      
      <h3>4. Organize Your Files</h3>
      <p>A well-organized file system makes it easier to find what you need and can help improve your computer's performance. Create folders for different types of files and delete anything you no longer need.</p>
      
      <h3>5. Restart Your Computer Regularly</h3>
      <p>Restarting your computer regularly can help clear temporary files and refresh the system, which can improve performance and fix minor issues.</p>
    `
  },
  {
    id: "smart-home-device-maintenance-guide",
    title: "Keeping Smart Home Devices Reliable Through Regular Maintenance and Proper Setup",
    excerpt: "Smart home technology has become an important part of everyday living. From smart speakers and security cameras to connected thermostats, lighting systems, and home automation devices, these products make daily routines more convenient and efficient. Like any technology, however, smart home devices perform best when they are properly configured, maintained, and connected to a stable network. Understanding a few simple maintenance practices can help improve reliability, reduce connectivity issues, and extend the life of your smart home equipment.",
    image: "/k-hub4.png",
    date: "July 12, 2026",
    readTime: "6 min read",
    category: "Smart Home",
    content: `
      <p>Smart home technology has become an important part of everyday living. From smart speakers and security cameras to connected thermostats, lighting systems, and home automation devices, these products make daily routines more convenient and efficient. Like any technology, however, smart home devices perform best when they are properly configured, maintained, and connected to a stable network. Understanding a few simple maintenance practices can help improve reliability, reduce connectivity issues, and extend the life of your smart home equipment.</p>
      
      <h3>1. Keep Firmware Updated</h3>
      <p>Smart home device manufacturers often release firmware updates that include security patches, bug fixes, and new features. Check for updates regularly or set your devices to update automatically.</p>
      
      <h3>2. Secure Your Smart Home Network</h3>
      <p>Use strong, unique passwords for each of your smart home devices and your Wi-Fi network. Consider setting up a separate network for your smart home devices for added security.</p>
      
      <h3>3. Clean Your Devices Regularly</h3>
      <p>Dust and debris can accumulate on smart home devices, especially cameras and sensors, which can affect their performance. Clean your devices regularly using a soft, dry cloth.</p>
      
      <h3>4. Check Device Placement</h3>
      <p>Make sure your smart home devices are placed in optimal locations for connectivity and performance. For example, security cameras should have a clear view of the area you want to monitor, and smart speakers should be placed where they can easily hear your voice commands.</p>
      
      <h3>5. Test Your Devices Regularly</h3>
      <p>Periodically test your smart home devices to make sure they're working correctly. Check that cameras are recording, sensors are detecting motion, and automated routines are running as expected.</p>
    `
  }
];

// Generate metadata dynamically for each post
export async function generateMetadata({ params }) {
  const post = blogPosts.find(p => p.id === params.id);
  if (!post) {
    return {
      title: 'Post Not Found | SmartEprint Services',
      description: 'The requested blog post was not found.',
    };
  }
  return {
    title: `${post.title} | SmartEprint Services`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-gray-600">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link href="/blogs" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#024AD8] px-6 py-3 text-white font-semibold hover:bg-[#024AD8]/90">
            Back to Blog
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      {/* Hero */}
      <div className="relative left-1/2 w-screen -ml-[50vw]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#011B3E] via-[#024AD8] to-[#0B63F6]">
          <div className="relative z-10 mx-auto flex min-h-[40vh] max-w-5xl flex-col justify-center px-6 py-16 text-white">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-blue-100">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-1.5">
                <Tag size={14} />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative left-1/2 w-screen -ml-[50vw] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div
          className="prose prose-lg max-w-none text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#024AD8] font-semibold hover:text-[#0B63F6]">
            <ArrowRight size={16} className="rotate-180" />
            Back to Blog
          </Link>
        </div>
      </article>

      {/* CTA Section */}
   <StandardCTA/> 
    </section>
  );
}
