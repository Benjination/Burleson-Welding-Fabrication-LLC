// info.ts
export function renderInfo(): string {
  return `
    <div class="header">
      <img src="images/Logo/Red Shirt.jpg" alt="Burleson Welding Logo" class="logo">
      <h1>Burleson Welding & Fabrication LLC</h1>
    </div>
    <div class="content">
      <div class="contact-info">
        <p><strong>📍 Location:</strong> 88 Linshaw Ave, Pittsburgh, PA 15205</p>
        <p><strong>📞 Contact:</strong> <a href="tel:4125121718">(412) 512-1718</a></p>
        <p><strong>👨‍💼 Owner:</strong> David Burleson</p>
        <p><strong>🏢 Business since:</strong> 2010–2011 (15 years experience)</p>
        <p><strong>🌍 Regions Served:</strong> Pittsburgh area and surrounding cities including West Mifflin, Glenshaw, Sewickley, Canonsburg, McDonald, etc.</p>
        <p><strong>👨‍👩‍👧‍👦 Business Model:</strong> Family owned and operated.</p>
      </div>
      
      <div class="section">
        <h2>Services Offered</h2>
        <ul>
          <li>Residential and commercial railings</li>
          <li>Custom fabrication</li>
          <li>Fire escapes</li>
          <li>BBQ smoker repairs and builds</li>
          <li>Custom furniture (indoor / outdoor)</li>
          <li>Fire pits (gas and wood)</li>
          <li>Welding processes: TIG, MIG, and Arc welding</li>
          <li>Metal stairs and railings (install and repair)</li>
          <li>Aluminum/steel fence repair and installation</li>
          <li>Sheet and ornamental metal work</li>
          <li>Mobile welding jobs</li>
          <li>General machine/welding job shop services</li>
          <li>Custom signage and metal artwork</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Reputation & Reviews</h2>
        <ul>
          <li><strong>HomeAdvisor:</strong> 100% recommended, praised for professionalism, fairness, and quality. Ratings: 4.5–5 stars.</li>
          <li><strong>Yelp:</strong> Mixed reviews, overall 3.0 stars. Noted for reliability and reasonable pricing.</li>
          <li><strong>Angi:</strong> 3.0/5. Basic welding services; no free estimates, warranties, senior discounts, emergency, or eco-friendly services.</li>
          <li><strong>Nextdoor:</strong> Favorably recognized by neighbors for stairwell work and recommendations.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Qualifications & Background</h2>
        <ul>
          <li>Owner: David Burleson, over a decade of hands-on welding experience, prior employment at Sipple Steel.</li>
          <li>Education: Allegheny College, Dean Institute of Technology (Welding Technology/Welder).</li>
          <li>The Blue Book: Focus on welding/cutting, plasma cutting, mobile welding. Active since 2022.</li>
        </ul>
      </div>
      
      <div class="section">
        <h2>Business Hours</h2>
        <p>Monday–Friday, 9:00 AM–5:00 PM. Appointments recommended before visiting.</p>
        
        <h2>Recent Activity</h2>
        <p>Custom welding, signage, and mobile welding promoted via social media as recently as August 2025.</p>
        
        <h2>Project Gallery</h2>
        <div class="gallery">
          <img src="images/Gallery/Mantle.jpg" alt="Custom Mantle Work" onclick="openLightbox(0)">
          <img src="images/Gallery/Monster Welder.jpg" alt="Professional Welding Equipment" onclick="openLightbox(1)">
          <img src="images/Gallery/Ornate Railing.jpg" alt="Ornate Custom Railing" onclick="openLightbox(2)">
          <img src="images/Gallery/Second-Floor Exterior Rail.jpg" alt="Second Floor Exterior Railing" onclick="openLightbox(3)">
          <img src="images/Gallery/Short exterior rail.jpg" alt="Exterior Railing Installation" onclick="openLightbox(4)">
          <img src="images/Gallery/Sports team chair.jpg" alt="Custom Sports Team Chair" onclick="openLightbox(5)">
          <img src="images/Gallery/Staircase.jpg" alt="Custom Metal Staircase" onclick="openLightbox(6)">
          <img src="images/Gallery/Star wars.jpg" alt="Custom Star Wars Themed Work" onclick="openLightbox(7)">
          <img src="images/Gallery/Under Staircase.jpg" alt="Under Staircase Installation" onclick="openLightbox(8)">
        </div>
      </div>
    </div>
    <div class="footer">
      <p>&copy; 2025 Burleson Welding & Fabrication LLC. All rights reserved.</p>
    </div>
  `;
}
