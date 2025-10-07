// Inject footer dynamically
document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer class="bg-gray-200 text-gray-800 pt-8 min-h-40">
        <div class="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
            <!-- Left: Company Info -->
            <div class="w-full md:w-1/2 mb-8 md:mb-0">
                <h3 class="flex items-center text-xl font-bold mb-4">
                    <img src="./images/logosavior.jpg" alt="SAVIORTECH Logo" class="w-16 h-16 mr-2 rounded-full" />
                    SAVIORTECH
                </h3>
                <p class="text-gray-600 mb-4">
                    Transforming businesses through innovative digital solutions.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <!-- Right: Links Grid -->
            <div class="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <!-- Quick Links -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="./index.html" class="text-gray-600 hover:text-gray-900 transition duration-300">Home</a></li>
                        <li><a href="./service.html" class="text-gray-600 hover:text-gray-900 transition duration-300">Services</a></li>
                        <li><a href="./about.html" class="text-gray-600 hover:text-gray-900 transition duration-300">About</a></li>
                        <li><a href="./team.html" class="text-gray-600 hover:text-gray-900 transition duration-300">Team</a></li>
                        <li><a href="./contact.html" class="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a></li>
                    </ul>
                </div>

                <!-- Resources -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Resources</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">Blog</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">FAQs</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300">Terms of Service</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Info</h3>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-3 text-gray-600"></i>
                            <span class="text-gray-600">
                                Plot no.15 Sector 22 Dwarka<br>
                                Delhi, New Delhi, Delhi 110075
                            </span>
                        </li>
                        <li>
                            <a href="mailto:support@saviorhires.in" class="flex items-center">
                                <i class="fas fa-envelope mr-3 text-gray-600"></i>
                                <span class="text-gray-600 hover:text-gray-900">support@saviortech.in</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+918445734331" class="flex items-center">
                                <i class="fas fa-phone-alt mr-3 text-gray-600"></i>
                                <span class="text-gray-600 hover:text-gray-900">+91-8445734331</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-400 bg-gray-900 mt-8 py-4 text-center flex flex-col md:flex-row items-center justify-between px-16">
            <!-- Left Side -->
            <div>
                <p class="text-gray-50">&copy; 2025 SAVIORTECH. All rights reserved.</p>
            </div>

            <!-- Right Side -->
            <div class="flex space-x-6 mt-2 md:mt-0">
                <a href="#" class="text-gray-400 hover:text-white transition">Terms & Conditions</a>
                <a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});