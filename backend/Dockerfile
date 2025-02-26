FROM php:8.2

# Update and install necessary packages
RUN apt-get update -y && apt-get install -y \
    openssl \
    zip \
    unzip \
    git \
    libpq-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libmcrypt-dev \
    libicu-dev \
    libxslt1-dev \
    libcurl4-openssl-dev \
    pkg-config \
    libssl-dev

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring

WORKDIR /app

COPY . /app

RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000
