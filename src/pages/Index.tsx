import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [revealedCodes, setRevealedCodes] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const toggleCodeReveal = (id: number) => {
    setRevealedCodes((prev) =>
      prev.includes(id) ? prev.filter((code) => code !== id) : [...prev, id],
    );
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const promoCodes = [
    {
      id: 1,
      brand: "Wildberries",
      code: "SAVE20",
      discount: "20%",
      description: "Скидка 20% на всё",
      category: "Мода",
      rating: 4.8,
      reviews: 1245,
      expires: "31 июля",
      isHot: true,
    },
    {
      id: 2,
      brand: "Ozon",
      code: "TECH15",
      discount: "15%",
      description: "Скидка на технику",
      category: "Электроника",
      rating: 4.6,
      reviews: 892,
      expires: "25 июля",
      isHot: false,
    },
    {
      id: 3,
      brand: "Delivery Club",
      code: "FOOD30",
      discount: "30%",
      description: "Скидка на первый заказ",
      category: "Еда",
      rating: 4.9,
      reviews: 2156,
      expires: "15 августа",
      isHot: true,
    },
    {
      id: 4,
      brand: "Lamoda",
      code: "STYLE25",
      discount: "25%",
      description: "Скидка на обувь",
      category: "Мода",
      rating: 4.7,
      reviews: 756,
      expires: "20 июля",
      isHot: false,
    },
  ];

  const brands = [
    { name: "Wildberries", logo: "🛍️", deals: 45 },
    { name: "Ozon", logo: "📦", deals: 32 },
    { name: "Delivery Club", logo: "🍕", deals: 28 },
    { name: "Lamoda", logo: "👗", deals: 21 },
    { name: "DNS", logo: "💻", deals: 19 },
    { name: "Citilink", logo: "🔌", deals: 15 },
  ];

  const categories = [
    { name: "Мода", icon: "Shirt", count: 127 },
    { name: "Электроника", icon: "Smartphone", count: 89 },
    { name: "Еда", icon: "UtensilsCrossed", count: 156 },
    { name: "Красота", icon: "Sparkles", count: 67 },
    { name: "Дом", icon: "Home", count: 91 },
    { name: "Спорт", icon: "Dumbbell", count: 43 },
  ];

  const filteredPromoCodes = promoCodes.filter(
    (promo) =>
      promo.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Percent" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                ПромоЗона
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Бренды
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Категории
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={18} />
                <span className="ml-1">Избранное</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Лучшие промокоды и скидки
          </h2>
          <p className="text-xl mb-8 text-orange-100 animate-fade-in">
            Экономьте до 70% в любимых магазинах с проверенными промокодами
          </p>
          <div className="max-w-2xl mx-auto relative animate-scale-in">
            <Input
              placeholder="Поиск промокодов, брендов, категорий..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-white/90 backdrop-blur-sm border-0 shadow-lg"
            />
            <Icon
              name="Search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={24}
            />
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-orange-100">Промокодов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-orange-100">Брендов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50%</div>
              <div className="text-orange-100">Средняя скидка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hot Deals */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Icon name="Flame" className="text-orange-500" size={24} />
            <h3 className="text-3xl font-bold">🔥 Горячие предложения</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoCodes
              .filter((promo) => promo.isHot)
              .map((promo) => (
                <Card
                  key={promo.id}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          {promo.brand[0]}
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {promo.brand}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {promo.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(promo.id)}
                      >
                        <Icon
                          name="Heart"
                          className={
                            favorites.includes(promo.id)
                              ? "text-red-500 fill-current"
                              : "text-gray-400"
                          }
                          size={18}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-2">
                          {promo.discount}
                        </div>
                        <p className="text-gray-600">{promo.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Icon
                            name="Star"
                            className="text-yellow-500"
                            size={16}
                          />
                          <span>{promo.rating}</span>
                          <span>({promo.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>До {promo.expires}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 relative">
                            <Input
                              value={promo.code}
                              readOnly
                              className={`text-center font-mono bg-gray-50 transition-all duration-300 ${
                                revealedCodes.includes(promo.id)
                                  ? ""
                                  : "blur-sm select-none"
                              }`}
                            />
                            {!revealedCodes.includes(promo.id) && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 rounded-md">
                                <Icon
                                  name="Eye"
                                  className="text-gray-400"
                                  size={16}
                                />
                              </div>
                            )}
                          </div>
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard(promo.code)}
                            disabled={!revealedCodes.includes(promo.id)}
                            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 disabled:opacity-50"
                          >
                            <Icon name="Copy" size={16} />
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleCodeReveal(promo.id)}
                          className="w-full"
                        >
                          {revealedCodes.includes(promo.id) ? (
                            <>
                              <Icon name="EyeOff" size={16} className="mr-2" />
                              Скрыть код
                            </>
                          ) : (
                            <>
                              <Icon name="Eye" size={16} className="mr-2" />
                              Показать код
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Brands & Categories */}
        <section className="mb-16">
          <Tabs defaultValue="brands" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="brands">Популярные бренды</TabsTrigger>
              <TabsTrigger value="categories">Категории</TabsTrigger>
            </TabsList>
            <TabsContent value="brands" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {brands.map((brand) => (
                  <Card
                    key={brand.name}
                    className="hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-2">{brand.logo}</div>
                      <h4 className="font-semibold mb-1">{brand.name}</h4>
                      <p className="text-sm text-gray-500">
                        {brand.deals} предложений
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="categories" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                  <Card
                    key={category.name}
                    className="hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <Icon
                        name={category.icon}
                        className="mx-auto mb-2 text-orange-500"
                        size={32}
                      />
                      <h4 className="font-semibold mb-1">{category.name}</h4>
                      <p className="text-sm text-gray-500">
                        {category.count} промокодов
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* All Promo Codes */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Все промокоды</h3>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ArrowUpDown" size={16} className="mr-2" />
                Сортировка
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPromoCodes.map((promo) => (
              <Card
                key={promo.id}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {promo.brand[0]}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{promo.brand}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {promo.category}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(promo.id)}
                    >
                      <Icon
                        name="Heart"
                        className={
                          favorites.includes(promo.id)
                            ? "text-red-500 fill-current"
                            : "text-gray-400"
                        }
                        size={18}
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">
                        {promo.discount}
                      </div>
                      <p className="text-gray-600">{promo.description}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Icon
                          name="Star"
                          className="text-yellow-500"
                          size={16}
                        />
                        <span>{promo.rating}</span>
                        <span>({promo.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>До {promo.expires}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        value={promo.code}
                        readOnly
                        className="flex-1 text-center font-mono bg-gray-50"
                      />
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                      >
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Percent" className="text-white" size={16} />
                </div>
                <h4 className="text-xl font-bold">ПромоЗона</h4>
              </div>
              <p className="text-gray-400">
                Лучшие промокоды и скидки для экономии на покупках
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <div className="space-y-2 text-gray-400">
                <div>Промокоды</div>
                <div>Бренды</div>
                <div>Категории</div>
                <div>Акции</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <div className="space-y-2 text-gray-400">
                <div>Как использовать</div>
                <div>FAQ</div>
                <div>Поддержка</div>
                <div>Контакты</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Уведомления</h5>
              <p className="text-gray-400 mb-4">Получайте лучшие предложения</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email"
                  className="bg-gray-800 border-gray-700"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-blue-600">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПромоЗона. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
