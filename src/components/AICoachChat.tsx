
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Sparkles, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AICoachChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AICoachChat: React.FC<AICoachChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI Career Coach from Galgotias One. I'm here to help you navigate academics, placements, clubs, and more!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Simulate typing effect for AI responses
  useEffect(() => {
    if (isTyping && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage.isUser) {
        let currentText = '';
        const textToType = lastMessage.text;
        let i = 0;
        
        const typingInterval = setInterval(() => {
          if (i < textToType.length) {
            currentText += textToType.charAt(i);
            setTypingText(currentText);
            i++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 15); // Speed of typing
        
        return () => clearInterval(typingInterval);
      }
    }
  }, [isTyping, messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setTypingText('');
    
    // Simulate AI response with more relevant university information
    setTimeout(() => {
      const aiResponses = [
        "I'd be happy to help you with that! At Galgotias University, we have several resources available for this. Would you like me to guide you through them?",
        "That's a great question about Galgotias University. The campus has 7 academic blocks, a central library with over 100,000 books, and multiple sports facilities. What specific information were you looking for?",
        "Regarding career planning at Galgotias, our placement cell works with 500+ companies. Last year's highest package was 42 LPA, and the average was 8 LPA. Have you registered for the upcoming placement drive?",
        "The placement season typically begins in the 6th semester. Our Training & Placement Cell offers mock interviews, resume building workshops, and aptitude training. Would you like tips on how to prepare?",
        "We have over 30 student clubs at Galgotias including technical societies like IEEE Student Branch, cultural clubs like Verve, and sports teams. Which area interests you most?"
      ];
      
      const aiMessage = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // Show a toast notification
      toast({
        title: "AI Coach",
        description: "New message from your career coach!",
        variant: "default",
      });
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {/* Header */}
          <motion.div 
            className="bg-university-navy text-white px-4 py-3 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <Avatar className="h-8 w-8 border-2 border-university-gold">
                  <AvatarImage src="/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png" alt="AI Coach" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <motion.div 
                  className="absolute -bottom-1 -right-1 bg-green-500 rounded-full h-3 w-3 border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <div>
                <h3 className="font-medium flex items-center gap-1">
                  AI Career Coach <Sparkles size={14} className="text-university-gold" />
                </h3>
                <p className="text-xs text-white/70">Online</p>
              </div>
            </div>
            <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/10 h-8 w-8"
                onClick={onClose}
              >
                <X size={18} />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <AnimatePresence>
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {!message.isUser && (
                    <div className="mr-2 flex flex-shrink-0 items-end mb-1">
                      <Avatar className="h-6 w-6 border border-gray-200">
                        <AvatarImage src="/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png" alt="AI Coach" />
                        <AvatarFallback><Bot size={14} /></AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                  
                  <motion.div 
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser 
                        ? 'bg-university-navy text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm">
                      {message.isUser || !isTyping || messages[messages.length - 1].id !== message.id
                        ? message.text
                        : typingText}
                    </p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </motion.div>
                  
                  {message.isUser && (
                    <div className="ml-2 flex flex-shrink-0 items-end mb-1">
                      <Avatar className="h-6 w-6 bg-university-gold/20">
                        <AvatarFallback className="text-university-navy"><User size={14} /></AvatarFallback>
                      </Avatar>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && typingText === '' && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center mr-2 mb-1">
                  <Avatar className="h-6 w-6 border border-gray-200">
                    <AvatarImage src="/lovable-uploads/3e0d8602-5863-415b-b013-2dd033dc3f53.png" alt="AI Coach" />
                    <AvatarFallback><Bot size={14} /></AvatarFallback>
                  </Avatar>
                </div>
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                  <div className="flex space-x-1">
                    <motion.div 
                      className="w-2 h-2 bg-university-gold rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-university-gold rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-university-gold rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <motion.div 
            className="p-3 border-t border-gray-200 bg-white flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Input
              placeholder="Ask anything about Galgotias..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow border-gray-200 focus-visible:ring-university-gold focus-visible:ring-offset-0 rounded-full"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleSendMessage}
                disabled={inputText.trim() === '' || isTyping}
                className="bg-university-gold text-university-navy hover:bg-university-gold/90 h-10 w-10 rounded-full"
              >
                {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AICoachChat;
