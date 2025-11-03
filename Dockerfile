# =========================
#  Stage 1: Builder
# =========================
FROM node:20-slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


# =========================
#  Stage 2: Runner
# =========================
FROM node:20-slim AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

RUN yarn install --frozen-lockfile --production && \
    yarn cache clean && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["yarn", "start"]
