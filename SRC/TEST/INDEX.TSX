
              </h1>
              <p className="text-xl md:text-2xl font-light mb-12 text-gray-100 leading-relaxed max-w-3xl mx-auto">
                A primeira plataforma de saúde digital criada especialmente para a 
                comunidade LGBTQIAPN+. Conectamos você a profissionais capacitados 
                e cuidado inclusivo.
              </p>
              
              {/* Three Interactive CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  className="animate-bounce-in"
                  asChild
                  aria-label="Buscar profissionais de saúde inclusivos"
                >
                  <Link to="/buscar">
                    <Search className="mr-2 h-5 w-5" aria-hidden="true" />
                    Encontrar Profissionais
                  </Link>
                </Button>
                
                <Button 
                  variant="medical" 
                  size="xl"
                  className="animate-bounce-in"
                  style={{ animationDelay: '0.2s' }}
                  asChild
                  aria-label="Agendar consulta médica"
                >
                  <Link to="/agendar">
                    <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                    Agendar Consulta
                  </Link>
                </Button>

                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-primary animate-bounce-in"
                  style={{ animationDelay: '0.4s' }}
                  asChild
                  aria-label="Saber mais sobre nossos serviços"
                >
                  <Link to="/sobre">
                    <Shield className="mr-2 h-5 w-5" aria-hidden="true" />
                    Saiba Mais
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          className="py-16 lg:py-20 bg-white" 
          aria-labelledby="services-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Como Funciona
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Três passos simples para acessar cuidados de saúde respeitosos e inclusivos, 
                com a segurança e qualidade que você merece.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="p-8 text-center hover-lift animate-slide-up bg-gradient-card border-0 shadow-soft"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      variant="default" 
                      className="group"
                      asChild
                      aria-label={`${service.action} - ${service.title}`}
                    >
                      <Link to={service.href}>
                        {service.action}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-16 lg:py-20 bg-secondary/5" 
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Por que Escolher a Lacrei
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nosso compromisso vai além de conectar pessoas a profissionais. 
                Garantimos qualidade, segurança e respeito em cada etapa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          className="py-16 lg:py-20 bg-white" 
          aria-labelledby="testimonials-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Histórias Reais
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Veja o que nossa comunidade tem a dizer sobre a experiência 
                de cuidar da saúde com respeito e inclusão.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift animate-slide-up bg-gradient-card border-0 shadow-soft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  role="article"
                  aria-label={`Depoimento de ${testimonial.name}`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <footer>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </footer>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="py-16 lg:py-20 bg-gradient-primary text-white" 
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="cta-heading" className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Comece Sua Jornada de Cuidado Hoje
              </h2>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Junte-se a milhares de pessoas que já encontraram na Lacrei Saúde 
                um lugar seguro para cuidar de si mesmas.
              </p>
              <Button 
                variant="medical" 
                size="xl"
                className="font-semibold animate-bounce-in"
                asChild
                aria-label="Criar conta gratuita na Lacrei Saúde"
              >
                <Link to="/cadastro">
                  Criar Conta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
