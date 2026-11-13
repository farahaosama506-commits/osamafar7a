const { createApp } = Vue;

createApp({
    data() {
        return {
            isEnglish: false,
            isScrolled: false,
            mobileMenuOpen: false,
            showScrollTop: false,
            isLoading: true,
            heroBackgroundImage: 'images/hero-bg.jpg',
            
            currentSlide: 0,
            slideInterval: null,
            totalSlides: 3,
            
            heroVisible: false,
            aboutTitleVisible: false,
            aboutTextVisible: false,
            aboutVisualVisible: false,
            skillsTitleVisible: false,
            resourcesTitleVisible: false,
            projectsTitleVisible: false,
            contactTitleVisible: false,
            formVisible: false,
            footerVisible: false,
            
            stats: [
                { id: 1, number: '4+', label: 'سنوات خبرة', labelEn: 'Years Exp', visible: false },
                { id: 2, number: '50+', label: 'مشروع مكتمل', labelEn: 'Projects', visible: false },
                { id: 3, number: '100%', label: 'رضا العملاء', labelEn: 'Satisfaction', visible: false }
            ],
            
            skills: [
                { 
                    name: 'التطوير الأمامي', nameEn: 'Frontend Development',
                    icon: 'fas fa-code', 
                    items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Vue.js', 'React', 'SASS/SCSS', 'Bootstrap', 'Tailwind CSS'], 
                    visible: false 
                },
                { 
                    name: 'الأدوات والتقنيات', nameEn: 'Tools & Technologies',
                    icon: 'fas fa-tools', 
                    items: ['Git & GitHub', 'Webpack', 'RESTful APIs', 'Figma', 'Adobe XD', 'Photoshop', 'VS Code'], 
                    visible: false 
                },
                { 
                    name: 'التطوير المتجاوب', nameEn: 'Responsive Development',
                    icon: 'fas fa-mobile-alt', 
                    items: ['Mobile First', 'PWA', 'Cross-browser', 'Performance', 'SEO', 'Accessibility'], 
                    visible: false 
                },
                 { 
        name: 'التطوير الخلفي (Backend)', 
        nameEn: 'Backend Development',
        icon: 'fas fa-server', 
        items: ['Node.js', 'Next.js', 'WebSockets', 'APIs Integration', 'MongoDB', 'PostgresSQL'], 
        visible: false 
    }
            ],
            
            resources: [
                {
                    name: 'برمجة ويب متقدم',
                    nameEn: 'Advanced Web Dev',
                    icon: 'fab fa-react',
                    visible: false,
                    items: [
                        { name: 'React', nameEn: 'React', icon: 'fab fa-react', link: 'https://www.youtube.com/watch?v=ihRRf3EjTV8&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS' },
                        { name: 'Next.js', nameEn: 'Next.js', icon: 'fab fa-js', link: 'https://www.youtube.com/watch?v=eazCUOzkLsM&list=PLuqzHerFBD5Bw9QwzoTufiMAM0npEcnoX' },
                        { name: 'Express.js', nameEn: 'Express.js', icon: 'fab fa-node', link: 'https://www.youtube.com/watch?v=IXLhZ9cFS0E&list=PLeWmXrh00479LgmvKAdU8WV2nRXqX4ley' },
                        { name: 'React Native', nameEn: 'React Native', icon: 'fab fa-react', link: 'https://www.youtube.com/watch?v=Lqdn-cTdjaE&list=PLVcFHLLqtJ-HvRs1g1md6cefMp26OSHeT' }
                    ]
                },
                {
                    name: 'خوارزميات',
                    nameEn: 'Algorithms',
                    icon: 'fas fa-chart-line',
                    visible: false,
                    items: [
                        { name: 'Trees', nameEn: 'Trees', icon: 'fas fa-eye', link: 'https://www.youtube.com/watch?v=YAdLFsTG70w&list=PLAuemBFSZV1oE256PESc8ku8MX3xMQYJF' },
                        { name: 'Graph', nameEn: 'Graph', icon: 'fas fa-code', link: 'https://www.youtube.com/watch?v=5hPfm_uqXmw&list=PLm77mruelczpPDzLgp4UefbQRT4-cyJsW' },
                        { name: 'خوارزميات عودية', nameEn: 'خوارزميات عودية', icon: 'fas fa-book', link: 'https://www.youtube.com/watch?v=Z7qncBm31i8' }
                    ]
                },
                {
                    name: 'Git & GitHub',
                    nameEn: 'Git & GitHub',
                    icon: 'fab fa-github',
                    visible: false,
                    items: [
                        { name: 'Git & GitHub', nameEn: 'Git Docs', icon: 'fab fa-git-alt', link: 'https://www.youtube.com/watch?v=N7qWNQxFq90' },
                       
                    ]
                },
                {
                    name: 'قواعد البيانات',
                    nameEn: 'Databases',
                    icon: 'fas fa-database',
                    visible: false,
                    items: [
                        { name: 'PostgreSQL', nameEn: 'PostgreSQL', icon: 'fas fa-database', link: 'https://www.postgresql.org/docs/' },
                        { name: 'MongoDB', nameEn: 'MongoDB', icon: 'fas fa-leaf', link: 'https://www.mongodb.com/docs/' },
                        { name: 'MySQL', nameEn: 'MySQL', icon: 'fas fa-database', link: 'https://dev.mysql.com/doc/' }
                    ]
                }
            ],
            
            projects: [
                {
                    id: 1,
                    title: 'AURE E-Commerce',
                    titleEn: 'AURE E-Commerce',
                    description: 'متجر إلكتروني متكامل لملابس AURE - تصميم حديث وجذاب بتقنيات متطورة',
                    descriptionEn: 'Complete e-commerce store for AURE clothing - modern and attractive design with advanced technologies',
                    tech: ['NEXT.js', 'React', 'Tailwind'],
                    icon: 'fas fa-briefcase',
                    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    githubUrl: 'https://aur-olc.vercel.app/',
                    imageSrc: 'images/ii.png',
                    visible: false,
                    featured: false
                },
                {
                    id: 2,
                    title: 'New Portfolio (النسخة المطورة)',
                    titleEn: 'New Portfolio (Premium Edition)',
                    description: 'معرض أعمالي الجديد والمتطور - تصميم عصري بأحدث تقنيات NEXT.js و React مع تأثيرات تفاعلية عالية الأداء',
                    descriptionEn: 'My new and advanced portfolio - modern design with NEXT.js and React featuring high-performance interactive effects',
                    tech: ['NEXT.js', 'React.js', 'Framer Motion'],
                    icon: 'fas fa-star',
                    gradient: 'linear-gradient(135deg, #f59e0b, #ec489a, #6366f1)',
                    githubUrl: 'https://my-portfolio-nextjs-lyart.vercel.app/',
                    imageSrc: 'images/Portf.png',
                    visible: false,
                    featured: true
                },
                {
                    id: 3,
                    title: 'Dental Flow تطبيق عيادة الأسنان',
                    titleEn: 'Dental Flow SaaS',
                    description: 'تطبيق كامل ل ادارة العيادات الطبية الخاصة ب اطباء الاسنان ',
                    descriptionEn: 'A comprehensive practice management application for dentists.',
                    tech: ['Next js', 'TypeScript'],
                    icon: 'fas fa-hands-helping',
                    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    githubUrl: 'https://dental-flow-chi.vercel.app/',
                    imageSrc: 'images/dental.png',
                    visible: false,
                    featured: false
                },
                {
                    id: 4,
                    title: 'منصة رقمي بلس RAQMI PLUS',
                    titleEn: 'Raqmi+ for numbers',
                    description: 'منصة لبيع أرقام التفعيل',
                    descriptionEn: 'Activation number selling platform',
                    tech: ['Vue.js', 'Vuex'],
                    icon: 'fas fa-film',
                    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    githubUrl: 'https://raqmiplus.vercel.app/',
                    imageSrc: 'images/raqmi.png',
                    visible: false,
                    featured: false
                },
                {
                    id: 5,
                    title: 'Santorini Café',
                    titleEn: 'Santorini Café',
                    description: 'موقع مقهى ومطعم سانتوريني بتصميم راقي',
                    descriptionEn: 'Elegant café and restaurant website for Santorini',
                    tech: ['HTML5', 'CSS3', 'React.js', 'Responsive'],
                    icon: 'fas fa-utensils',
                    gradient: 'linear-gradient(135deg, #00b4d8, #0077b6)',
                    githubUrl: 'https://farahaosama506-commits.github.io/test-sant/',
                    imageSrc: 'images/santorini.png',
                    visible: false,
                    featured: false
                },
                {
                    id: 6,
                    title: 'Karim Dahboul',
                    titleEn: 'Karim Dahboul',
                    description: 'منصة تعلم اللغة الإنجليزية مع كريم - تجربة تعليمية ممتعة',
                    descriptionEn: 'Learn English with Karim - an enjoyable learning experience',
                    tech: ['HTML5', 'CSS3', 'NEXT.js', 'Responsive'],
                    icon: 'fas fa-chalkboard-user',
                    gradient: 'linear-gradient(135deg, #06d6a0, #0284c7)',
                    githubUrl: 'https://karim-dahboul.vercel.app/',
                    imageSrc: 'images/karim.png',
                    visible: false,
                    featured: false
                }
            ],
            
            contacts: [
                { platform: 'Whatsapp', platformEn: 'Whatsapp', info: '+963 939196057', icon: 'fab fa-whatsapp', url: 'https://wa.me/963939196057', visible: false },
                { platform: 'Facebook', platformEn: 'Facebook', info: 'Osama Farha', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/1QDd3te3bg/', visible: false },
                { platform: 'Instagram', platformEn: 'Instagram', info: '@osama.far7a', icon: 'fab fa-instagram', url: 'https://www.instagram.com/osama.far7a/', visible: false }
            ],
            
            form: { name: '', email: '', message: '', submitting: false },
            
            footerLinks: [
                { name: 'الرئيسية', nameEn: 'Home', href: '#home', section: 'home' },
                { name: 'عنّي', nameEn: 'About', href: '#about', section: 'about' },
                { name: 'المهارات', nameEn: 'Skills', href: '#skills', section: 'skills' },
                { name: 'مراجع مجانية', nameEn: 'Resources', href: '#resources', section: 'resources' },
                { name: 'المشاريع', nameEn: 'Projects', href: '#projects', section: 'projects' },
                { name: 'تواصل', nameEn: 'Contact', href: '#contact', section: 'contact' }
            ],
            
            services: [
                { ar: 'تطوير الويب', en: 'Web Development' },
                { ar: 'تصميم الواجهات', en: 'UI/UX Design' },
                { ar: 'تطبيقات Vue.js', en: 'Vue.js Apps' },
                { ar: 'متاجر إلكترونية', en: 'E-commerce' }
            ]
        }
    },
    mounted() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang === 'en') {
            this.isEnglish = true;
            this.updateDocumentDirection();
        }
        
        setTimeout(() => { this.isLoading = false; this.initAnimations(); }, 2000);
        window.addEventListener('scroll', this.handleScroll);
        this.setupObservers();
    },
    methods: {
        toggleLanguage() {
            this.isEnglish = !this.isEnglish;
            localStorage.setItem('preferredLanguage', this.isEnglish ? 'en' : 'ar');
            this.updateDocumentDirection();
        },
        
        updateDocumentDirection() {
            const htmlElement = document.documentElement;
            if (this.isEnglish) {
                htmlElement.setAttribute('dir', 'ltr');
                htmlElement.setAttribute('lang', 'en');
                document.body.style.direction = 'ltr';
            } else {
                htmlElement.setAttribute('dir', 'rtl');
                htmlElement.setAttribute('lang', 'ar');
                document.body.style.direction = 'rtl';
            }
        },
        
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
            this.showScrollTop = window.scrollY > 500;
        },
        
        scrollToSection(sectionId) {
            this.mobileMenuOpen = false;
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        
        scrollToProject(projectId) {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => {
                    const featuredCard = document.querySelector('.project-card.featured-card');
                    if (featuredCard) {
                        featuredCard.style.transform = 'scale(1.02)';
                        setTimeout(() => { featuredCard.style.transform = ''; }, 500);
                    }
                }, 800);
            }
        },
        
        scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); },
        toggleMobileMenu() { this.mobileMenuOpen = !this.mobileMenuOpen; },
        initAnimations() {
            setTimeout(() => {
                this.heroVisible = true;
                setTimeout(() => this.startSlideshow(), 1000);
            }, 300);
        },
        startSlideshow() { this.slideInterval = setInterval(() => this.nextSlide(), 5000); },
        nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.totalSlides; },
        goToSlide(slideIndex) { this.currentSlide = slideIndex; this.resetInterval(); },
        resetInterval() { if (this.slideInterval) { clearInterval(this.slideInterval); this.startSlideshow(); } },
        
        setupObservers() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) this.handleSectionVisibility(entry.target.id);
                });
            }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
            
            ['about', 'skills', 'resources', 'projects', 'contact'].forEach(section => {
                const element = document.getElementById(section);
                if (element) observer.observe(element);
            });
        },
        
        handleSectionVisibility(section) {
            switch(section) {
                case 'about':
                    this.aboutTitleVisible = true;
                    setTimeout(() => {
                        this.aboutTextVisible = this.aboutVisualVisible = true;
                        this.stats.forEach((stat, i) => setTimeout(() => stat.visible = true, i * 300));
                    }, 300);
                    break;
                case 'skills':
                    this.skillsTitleVisible = true;
                    this.skills.forEach((skill, i) => setTimeout(() => skill.visible = true, i * 400));
                    break;
                case 'resources':
                    this.resourcesTitleVisible = true;
                    this.resources.forEach((resource, i) => setTimeout(() => resource.visible = true, i * 200));
                    break;
                case 'projects':
                    this.projectsTitleVisible = true;
                    this.projects.forEach((project, i) => setTimeout(() => project.visible = true, i * 300));
                    break;
                case 'contact':
                    this.contactTitleVisible = true;
                    setTimeout(() => {
                        this.formVisible = true;
                        this.contacts.forEach((contact, i) => setTimeout(() => contact.visible = true, i * 300));
                    }, 300);
                    setTimeout(() => this.footerVisible = true, 1000);
                    break;
            }
        },
        
        hoverStat(statId) {},
        rotateCard(index) {},
        pulseTag(event) { event.target.style.transform = 'scale(1.2)'; setTimeout(() => event.target.style.transform = 'scale(1)', 300); },
        tiltCard(event, index) {
            const card = event.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left, y = event.clientY - rect.top;
            const rotateY = (x - rect.width/2) / 25;
            const rotateX = (rect.height/2 - y) / 25;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        },
        resetTilt(event) { event.currentTarget.style.transform = ''; },
        glowContact(event) { const el = event.currentTarget; el.style.boxShadow = '0 15px 30px rgba(99,102,241,0.3)'; setTimeout(() => el.style.boxShadow = '', 500); },
        
        async submitForm() {
            if (this.form.submitting) return;
            this.form.submitting = true;
            await new Promise(resolve => setTimeout(resolve, 1500));
            const successMsg = this.isEnglish ? 'Your message has been sent successfully! I will contact you soon.' : 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.';
            alert(successMsg);
            this.form = { name: '', email: '', message: '', submitting: false };
        }
    },
    beforeUnmount() { if (this.slideInterval) clearInterval(this.slideInterval); }
}).mount('#app');