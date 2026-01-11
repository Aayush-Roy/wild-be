import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CollectionSection } from './components/CollectionSection';
import { ArtisanSection } from './components/ArtisanSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExperienceFooterWrapper } from './components/ExperienceFooterWrapper';
import { Footer } from './components/Footer';
import { OurCollectionPage } from './components/OurCollectionPage';
import { CollectionCataloguePage } from './components/CollectionCataloguePage';
import { CollectionsPage } from './components/CollectionsPage';
import { OurStoryPage } from './components/OurStoryPage';
import { CraftsmanshipPage } from './components/CraftsmanshipPage';
import { CartOverlay } from './components/CartOverlay';
import { CartItem, ProductDetailPage } from './components/ProductDetailPage';
import { PageTransition } from './components/PageTransition';
import { LoadingAnimation } from './components/LoadingAnimation';
import TraditionalProducts from './components/small/TraditionalProducts';
type PageType = 'home' | 'collections' | 'ourStory' | 'craftsmanship' | 'menCollections' | 'womenCatalogue' | 'collectionCatalogue';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCollection, setSelectedCollection] = useState<{id: string, name: string} | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | undefined>();
  const [showLoading, setShowLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = 'Sohwais - The museum that sells';
  }, []);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('sohwais_visited');
    
    if (hasVisited) {
      setShowLoading(false);
      setHasLoadedBefore(true);
    } else {
      // Mark as visited
      sessionStorage.setItem('sohwais_visited', 'true');
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasLoadedBefore(true);
  };

  const handleNavigation = (page: PageType, event?: React.MouseEvent) => {
    // Prevent any default behavior that might cause scroll
    if (event) {
      event.preventDefault();
      setClickPosition({ x: event.clientX, y: event.clientY });
    }

    // Start transition
    setIsTransitioning(true);

    // Change page immediately for back navigation, with minimal delay for forward navigation
    const pageChangeDelay = 300; // Reduced from 800ms
    setTimeout(() => {
      setCurrentPage(page);
      // Scroll to top AFTER page change to ensure it works correctly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    }, pageChangeDelay);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, pageChangeDelay + 600);
  };

  const navigateToCollections = (event?: React.MouseEvent) => {
    handleNavigation('collections', event);
  };

  const navigateToHome = (event?: React.MouseEvent) => {
    handleNavigation('home', event);
  };

  const navigateToOurStory = (event?: React.MouseEvent) => {
    handleNavigation('ourStory', event);
  };

  const navigateToCraftsmanship = (event?: React.MouseEvent) => {
    handleNavigation('craftsmanship', event);
  };

  // Men's collection overview page
  const navigateToMensCollections = (event?: React.MouseEvent) => {
    handleNavigation('menCollections', event);
  };

  // Women's direct catalogue page  
  const navigateToWomensCatalogue = (event?: React.MouseEvent) => {
    setSelectedCollection({ id: 'womens', name: "Women's Collection" });
    handleNavigation('womenCatalogue', event);
  };

  // Handle collection selection from men's overview page
  const handleCollectionSelect = (collectionId: string) => {
    const collectionNames: Record<string, string> = {
      'madhubani': 'Madhubani Collection',
      'sujini': 'Sujini Collection',
      'marble': 'Marble Collection',
      'nakashi': 'Nakashi Collection',
      'majestic-linen': 'The Majestic Linen',
      'batik-archive': 'The Batik Archive',
      'explore-all': 'Craft Exploration'
    };
    
    setSelectedCollection({ 
      id: collectionId, 
      name: collectionNames[collectionId] || collectionId 
    });
    setCurrentPage('collectionCatalogue');
  };

  const handleBackFromMensCollections = (event?: React.MouseEvent) => {
    navigateToHome(event);
  };

  const handleBackFromCatalogue = (event?: React.MouseEvent) => {
    // Prevent default behavior
    if (event) {
      event.preventDefault();
    }
    
    setSelectedCollection(null);
    
    if (currentPage === 'womenCatalogue') {
      // Go back to home with transition
      navigateToHome(event);
    } else {
      // Go back to men's collections page directly (no transition needed since it's the same flow)
      window.scrollTo({ top: 0, behavior: 'instant' });
      setCurrentPage('menCollections');
    }
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      // Check if item with same id and size already exists
      const existingItemIndex = prev.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updated = [...prev];
        updated[existingItemIndex].quantity += item.quantity;
        return updated;
      } else {
        // Add new item
        return [...prev, item];
      }
    });
    
    // Auto-open cart briefly to show the item was added
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 2000);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (currentPage === 'collections') {
    return (
      <>
        <CollectionsPage
          onBack={navigateToHome}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onAddToCart={handleAddToCart}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if (currentPage === 'ourStory') {
    return (
      <>
        <OurStoryPage
          onBack={navigateToHome}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onOurStoryClick={navigateToOurStory}
          onCollectionClick={navigateToCollections}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if (currentPage === 'craftsmanship') {
    return (
      <>
        <CraftsmanshipPage
          onBack={navigateToHome}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if (currentPage === 'menCollections') {
    return (
      <>
        <OurCollectionPage
          onBack={handleBackFromMensCollections}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onCollectionSelect={handleCollectionSelect}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  if ((currentPage === 'womenCatalogue' || currentPage === 'collectionCatalogue') && selectedCollection) {
    return (
      <>
        <CollectionCataloguePage
          collectionId={selectedCollection.id}
          collectionName={selectedCollection.name}
          gender={currentPage === 'womenCatalogue' ? 'women' : 'men'}
          onBack={handleBackFromCatalogue}
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          onAddToCart={handleAddToCart}
          onCollectionClick={navigateToCollections}
          onOurStoryClick={navigateToOurStory}
          onCraftsmanshipClick={navigateToCraftsmanship}
        />
        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
        <PageTransition
          isTransitioning={isTransitioning}
          clickPosition={clickPosition}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <HeroSection onExploreClick={navigateToCollections} />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navigation 
            cartCount={cartCount} 
            onCartClick={() => setIsCartOpen(true)} 
            onCollectionClick={navigateToCollections}
            onOurStoryClick={navigateToOurStory}
            onCraftsmanshipClick={navigateToCraftsmanship}
          />
        </div>
      </div>
      <CollectionSection 
        onMensClick={navigateToMensCollections}
        onWomensClick={navigateToWomensCatalogue}
      />
      <ArtisanSection onCraftsmanshipClick={navigateToCraftsmanship} />
      <CraftsmanshipSection />
      <ExperienceFooterWrapper>
        <ExperienceSection onCollectionClick={navigateToCollections} />
        <Footer 
          onOurStoryClick={navigateToOurStory} 
          onCraftsmanshipClick={navigateToCraftsmanship}
          onCollectionClick={navigateToCollections}
          onHomeClick={navigateToHome}
        />
      </ExperienceFooterWrapper>
      <CartOverlay
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <PageTransition
        isTransitioning={isTransitioning}
        clickPosition={clickPosition}
      />
      <LoadingAnimation
        show={showLoading}
        onComplete={handleLoadingComplete}
        hasLoadedBefore={hasLoadedBefore}
      />
      <div>
       <TraditionalProducts/>
      </div>
    </div>
  );
}