import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dna } from "lucide-react";

const AstrologyPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  
  // Birth chart form
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  
  // Muhurta form
  const [eventType, setEventType] = useState("wedding");
  const [preferredDate, setPreferredDate] = useState("");
  
  // Remedy form
  const [question, setQuestion] = useState("");
  const [birthDetails, setBirthDetails] = useState("");
  
  // DNA testing form
  const [fullName, setFullName] = useState("");
  const [familyOrigin, setFamilyOrigin] = useState("");
  const [dnaKitId, setDnaKitId] = useState("");
  
  const handleBirthChartSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        const mockResponse = `
          # Vedic Birth Chart Analysis for ${birthDate}

          Based on your birth details (${birthDate}, ${birthTime} at ${birthPlace}), here is your Vedic astrology analysis:

          ## Ascendant (Lagna)
          Your ascendant is in Taurus, which is ruled by Venus. This gives you a grounded, patient and determined nature.

          ## Sun Sign
          Your Sun is positioned in Libra, indicating a balanced, harmonious and fair-minded personality.

          ## Moon Sign
          Your Moon is in Pisces, suggesting you are intuitive, compassionate and emotionally sensitive.

          ## Key Planetary Positions
          - Mercury in Libra: You have a balanced and fair way of thinking and communicating.
          - Venus in Virgo: Your approach to relationships is practical and service-oriented.
          - Mars in Scorpio: You have intense drive and determination with deep reserves of energy.
          - Jupiter in Cancer: You have natural luck in matters related to home, family and emotional security.
          - Saturn in Aquarius: You have a structured approach to humanitarian causes and group activities.

          ## Important Yogas
          You have a Gajakesari Yoga formed between Jupiter and Moon, which brings good fortune, wisdom and success.

          ## Dasha Periods
          You are currently running the Venus Mahadasha until 2027, which is a favorable period for relationships, arts, and material comforts.

          ## Remedies
          To strengthen your planetary positions:
          - Wear a Yellow Sapphire for Jupiter
          - Recite the Vishnu Sahasranama on Thursdays
          - Donate yellow items on Thursdays
        `;
        
        setResult(mockResponse);
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate birth chart. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  const handleMuhurtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        const mockResponse = `
          # Muhurta Analysis for ${eventType.charAt(0).toUpperCase() + eventType.slice(1)}

          Based on your preferred date (${preferredDate}) for ${eventType}, here are the most auspicious timings according to Vedic astrology:

          ## Auspicious Timings
          - **Morning Muhurta**: 8:15 AM - 9:45 AM
          - **Afternoon Muhurta**: 1:30 PM - 3:00 PM
          - **Evening Muhurta**: 6:45 PM - 8:15 PM

          ## Planetary Positions
          On this day, the planetary positions are generally favorable with:
          - Moon in Taurus: Stable emotions and favorable for social events
          - Venus well-placed: Good for relationships and celebrations
          - Jupiter aspects the Lagna: Brings blessings and growth

          ## Auspicious Yogas
          - **Siddha Yoga**: Present from 8:15 AM to 9:45 AM - Highly favorable for new beginnings
          - **Amrita Yoga**: Present from 6:45 PM to 8:15 PM - Brings success and fulfillment

          ## Recommendations
          - Perform the ${eventType} during the morning Muhurta if possible
          - Offer prayers to Lord Ganesha before starting the ceremony
          - Wear colors associated with Jupiter (yellow) and Venus (white) for good fortune

          ## Remedies before Event
          - Recite the Navagraha Stotram on the day before the event
          - Donate to the poor or perform charity on the morning of the event
        `;
        
        setResult(mockResponse);
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate muhurta analysis. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  const handleRemedySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        const mockResponse = `
          # Dosha Analysis and Remedies

          Based on your question: "${question}" and birth details: "${birthDetails}", here are the potential doshas and their remedies:

          ## Identified Doshas
          1. **Kala Sarpa Dosha** (Moderate)
             All planets are positioned between Rahu and Ketu, which may cause delays and obstacles in life.

          2. **Mangal Dosha** (Mild)
             Mars is positioned in the 1st, 4th, 7th, or 12th house, which may affect marital harmony and relationships.

          3. **Pitra Dosha** (Present)
             This suggests ancestral issues that need to be addressed through specific rituals.

          ## Recommended Remedies

          ### For Kala Sarpa Dosha:
          - Perform Kala Sarpa Dosha Nivaran Puja at a Rahu temple
          - Recite the Rahu Stotram daily for 40 days
          - Feed crows on Saturdays with rice mixed with black sesame seeds
          - Wear a hessonite (Gomed) gemstone after proper consultation

          ### For Mangal Dosha:
          - Recite the Hanuman Chalisa daily
          - Perform Kuja/Mangal Shanti Puja
          - Donate red clothes, masoor dal, or copper items on Tuesdays
          - Observe fast on Tuesdays for 21 consecutive weeks

          ### For Pitra Dosha:
          - Perform Pitra Dosh Nivaran Puja
          - Perform Shraadh ceremony during Pitru Paksha
          - Donate food and clothes to the needy in the name of ancestors
          - Perform Tarpan (water offering ritual) daily

          ## General Spiritual Practices
          - Regular meditation to calm the mind
          - Recite the Mahamrityunjaya Mantra 108 times daily
          - Visit temples of Lord Shiva and offer Bilva leaves

          Remember that these remedies should be performed with proper guidance from a qualified priest or astrologer.
        `;
        
        setResult(mockResponse);
        setLoading(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate dosha and remedy analysis. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  const handleDnaTestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        const mockResponse = `
          # DNA Analysis Results for ${fullName}

          ## Ancestry Composition
          Based on your DNA sample (Kit ID: ${dnaKitId}) and family origin information (${familyOrigin}), here is your ancestry breakdown:

          - 42% South Indian
          - 28% North Indian
          - 15% Central Asian
          - 8% Southeast Asian
          - 5% Middle Eastern
          - 2% European

          ## Historical Background
          Your DNA reveals deep connections to ancient civilizations of the Indian subcontinent. Your ancestors likely migrated through the following regions:
          
          - Indus Valley Civilization (3300-1300 BCE)
          - Ancient Dravidian kingdoms of South India
          - Mauryan Empire territories
          - Gupta Dynasty regions

          ## Recommended Temples to Visit Based on Your Heritage

          ### South India
          - Meenakshi Amman Temple, Madurai, Tamil Nadu
          - Sri Ranganathaswamy Temple, Trichy, Tamil Nadu
          - Virupaksha Temple, Hampi, Karnataka

          ### North India
          - Kashi Vishwanath Temple, Varanasi, Uttar Pradesh
          - Badrinath Temple, Uttarakhand
          - Jagannath Temple, Puri, Odisha

          ### Central India
          - Khajuraho Group of Temples, Madhya Pradesh
          - Mahakaleshwar Temple, Ujjain, Madhya Pradesh

          ## Spiritual Practices Associated with Your Lineage
          - Meditation techniques from the Shaiva tradition
          - Devotional practices of the Vaishnava tradition
          - Tantric rituals from the eastern Indian traditions

          We recommend performing pilgrimage to these temples to connect with your ancestral roots and spiritual heritage.
        `;
        
        setResult(mockResponse);
        setLoading(false);
        
        toast({
          title: "DNA Analysis Complete",
          description: "Your ancestry and temple recommendations are ready.",
        });
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze DNA sample. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hindu Astrology</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover insights from Vedic astrology, based on ancient Hindu principles that have guided spiritual seekers for thousands of years.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="birthchart">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="birthchart">Birth Chart</TabsTrigger>
                  <TabsTrigger value="muhurta">Muhurta</TabsTrigger>
                  <TabsTrigger value="remedies">Remedies</TabsTrigger>
                  <TabsTrigger value="dna">DNA Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="birthchart">
                  <form onSubmit={handleBirthChartSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="birth-date">Birth Date</Label>
                      <Input 
                        id="birth-date" 
                        type="date" 
                        required 
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birth-time">Birth Time</Label>
                      <Input 
                        id="birth-time" 
                        type="time" 
                        required 
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birth-place">Birth Place</Label>
                      <Input 
                        id="birth-place" 
                        type="text" 
                        placeholder="e.g., Delhi, India" 
                        required 
                        value={birthPlace}
                        onChange={(e) => setBirthPlace(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={loading}
                    >
                      {loading ? "Generating Chart..." : "Generate Birth Chart"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="muhurta">
                  <form onSubmit={handleMuhurtaSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="event-type">Event Type</Label>
                      <Select 
                        value={eventType} 
                        onValueChange={setEventType}
                        required
                      >
                        <SelectTrigger id="event-type">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="housewarming">Housewarming</SelectItem>
                          <SelectItem value="nameceremony">Naming Ceremony</SelectItem>
                          <SelectItem value="business">Business Opening</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="preferred-date">Preferred Date</Label>
                      <Input 
                        id="preferred-date" 
                        type="date" 
                        required 
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={loading}
                    >
                      {loading ? "Finding Muhurta..." : "Find Auspicious Time"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="remedies">
                  <form onSubmit={handleRemedySubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="question">Your Question or Concern</Label>
                      <Textarea 
                        id="question" 
                        placeholder="e.g., I'm facing obstacles in my career. What remedies can help?" 
                        className="resize-none" 
                        rows={3} 
                        required
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="birth-details">Birth Details</Label>
                      <Textarea 
                        id="birth-details" 
                        placeholder="Date, time and place of birth" 
                        className="resize-none" 
                        rows={2} 
                        required
                        value={birthDetails}
                        onChange={(e) => setBirthDetails(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={loading}
                    >
                      {loading ? "Finding Remedies..." : "Get Remedies"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="dna">
                  <div className="flex items-center gap-2 mb-4">
                    <Dna className="h-5 w-5 text-orange-500" />
                    <h3 className="font-medium text-lg">Discover Your Ancestral Temple Connections</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Our DNA analysis reveals your ancestral roots and recommends specific temples that align with your heritage.
                    Submit your DNA kit ID along with your details to receive personalized temple recommendations.
                  </p>
                  <form onSubmit={handleDnaTestSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="full-name">Full Name</Label>
                      <Input 
                        id="full-name" 
                        type="text" 
                        placeholder="Your full name" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="dna-kit-id">DNA Kit ID</Label>
                      <Input 
                        id="dna-kit-id" 
                        type="text" 
                        placeholder="e.g., HIND-12345-AB" 
                        required 
                        value={dnaKitId}
                        onChange={(e) => setDnaKitId(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="family-origin">Known Family Origin</Label>
                      <Input 
                        id="family-origin" 
                        type="text" 
                        placeholder="e.g., Southern India, Gujarat, etc." 
                        required 
                        value={familyOrigin}
                        onChange={(e) => setFamilyOrigin(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={loading}
                    >
                      {loading ? "Analyzing DNA..." : "Analyze My Heritage"}
                    </Button>
                  </form>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded-md">
                    <p className="text-xs text-gray-600">
                      Note: For actual DNA testing, purchase our test kit from the temple shop. Enter the 
                      kit ID after you receive your results by email. This demo shows sample results.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="mt-8 bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Hindu Astrology?</h3>
            <p className="mb-4">
              Hindu (Vedic) Astrology, also known as Jyotish, is one of the oldest astrological systems in the world,
              dating back over 5,000 years. It offers profound insights into:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Your spiritual path and purpose</li>
              <li>Karma and past life influences</li>
              <li>Relationship compatibility</li>
              <li>Career and financial prospects</li>
              <li>Health and wellbeing</li>
              <li>Auspicious timing for important life events</li>
            </ul>
            <p>
              Unlike Western astrology, Vedic astrology uses the sidereal zodiac and
              takes into account the precession of equinoxes, which many believe provides more accurate predictions.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Your Astrological Reading</h2>
                {result && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.print()}
                  >
                    Print
                  </Button>
                )}
              </div>
              
              {!result ? (
                <div className="text-center py-20">
                  <div className="inline-block p-6 rounded-full bg-orange-50 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Your astrology reading will appear here</h3>
                  <p className="text-gray-600">
                    Fill out the form on the left to receive your personalized reading based on Vedic astrological principles.
                  </p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  {result.split('\n').map((line, index) => {
                    if (line.startsWith('# ')) {
                      return <h2 key={index} className="text-2xl font-bold mt-4 mb-4">{line.substring(2)}</h2>;
                    } else if (line.startsWith('## ')) {
                      return <h3 key={index} className="text-xl font-semibold mt-3 mb-2">{line.substring(3)}</h3>;
                    } else if (line.startsWith('- ')) {
                      return <li key={index} className="ml-5">{line.substring(2)}</li>;
                    } else if (line.startsWith('### ')) {
                      return <h4 key={index} className="text-lg font-medium mt-2 mb-1">{line.substring(4)}</h4>;
                    } else if (line === '') {
                      return <br key={index} />;
                    } else {
                      return <p key={index} className="mb-2">{line}</p>;
                    }
                  })}
                </div>
              )}
              
              {loading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
                    <p className="text-orange-500 font-medium">Consulting the stars...</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-36 bg-orange-400"></div>
              <CardContent className="p-5">
                <h3 className="font-bold mb-2">Daily Panchang</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Check today's tithi, nakshatra, yoga, karana, and auspicious timings.
                </p>
                <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                  <a href="#daily">Check Today</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-36 bg-amber-400"></div>
              <CardContent className="p-5">
                <h3 className="font-bold mb-2">Match Making</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Check compatibility between two birth charts for relationships.
                </p>
                <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                  <a href="#match">Check Compatibility</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-36 bg-orange-300"></div>
              <CardContent className="p-5">
                <h3 className="font-bold mb-2">Planetary Transits</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Understand how current planetary positions affect your life.
                </p>
                <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                  <a href="#transits">View Transits</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* DNA Ancestry Section */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Dna className="h-6 w-6 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-bold">DNA Heritage & Temple Connection</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-medium text-lg mb-3">How DNA Analysis Works</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Our specialized DNA analysis examines specific genetic markers that are unique to different 
                      geographical regions of India and Southeast Asia. These markers have been mapped to ancient 
                      migratory patterns and temple traditions.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>We analyze over 700,000 genetic markers</li>
                      <li>Compare your DNA with our reference database of 50,000+ samples</li>
                      <li>Identify your ancestral regions with 99.7% accuracy</li>
                      <li>Map your genetic heritage to temple traditions and practices</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Temple Heritage Connection</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Different temples across India maintain traditions that correspond to various genetic lineages. 
                      By understanding your DNA, we can recommend temples where:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>Your ancestors likely worshipped</li>
                      <li>Rituals align with your genetic predispositions</li>
                      <li>Architectural elements resonate with your ancestral memory</li>
                      <li>Your spiritual connection may be strongest</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 border border-orange-200 rounded-lg">
                  <h3 className="font-medium mb-2">DNA Testing Kit</h3>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 bg-orange-100 rounded-md flex items-center justify-center">
                      <Dna className="h-10 w-10 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Order our specialized Hindu Heritage DNA Kit and discover which temples align with your ancestry.
                        Results are processed within 4-6 weeks after sample submission.
                      </p>
                      <Button className="mt-3 bg-orange-500 hover:bg-orange-600">
                        Order DNA Kit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="mt-20 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Connect with Expert Astrologers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For more personalized guidance, connect with our panel of experienced Vedic astrologers who can provide deeper insights and specific remedies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full bg-orange-200 mx-auto mb-3"></div>
              <h3 className="font-medium">Pandit Sharma</h3>
              <p className="text-sm text-gray-500 mb-3">30+ years experience</p>
              <Button size="sm" variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstrologyPage;
