<template>
  <div class="info-item">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<style lang="scss" scoped>
@use "../../assets/styles/_variables" as *;

.info-item {
  border-left: 2px solid #1a1a1a;
  padding-left: 1.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.75rem;

    &::after {
      content: "";
      display: inline-block;
      width: 0.25rem;
      height: 0.25rem;
      background-color: #00ff88;
      border-radius: 50%;
      margin-left: 0.5rem;
      vertical-align: middle;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #999999;
    margin: 0;
  }

  // Hover effects
  &:hover {
    border-left-color: #00ff88;
    transition: border-left-color 0.3s ease;

    h3 {
      color: #00ff88;
      transition: color 0.3s ease;
    }
  }
}

.info-item {
  margin-bottom: 30px;
}

.info-label {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  display: block;
}

.info-text {
  font-size: 16px;
  line-height: 1.7;
  color: #ffffff;
  font-weight: 400;
}

// Responsive design
@media (max-width: 768px) {
  .info-item {
    padding-left: 1rem;

    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
}
</style>
