<?php

namespace App\Services;

use Carbon\Carbon;
use Carbon\CarbonInterface;

/**
 * @property Carbon $startTime
 * @property Carbon $endTime
 * @property float $startMem
 * @property float $endMem
 */
class BenchmarkService {

    public function start(): void
    {
        $this->startTime = now();
        $this->startMem = round(memory_get_usage()/1048576,2);
    }

    public function stop(): void
    {
        $this->endTime = now();
        $this->endMem = round(memory_get_usage()/1048576,2);
    }

    public function executionTime(): string
    {
        return $this->startTime->diffForHumans(now(), CarbonInterface::DIFF_ABSOLUTE);
    }

    public function memoryUsage(): float
    {
        return $this->endMem;
    }

    /**
     * Print the results of the benchmark
     * @return void
     */
    public function print(): void
    {
        echo "Execution Time: {$this->executionTime()}\n";
        echo "Memory Used: {$this->memoryUsage()} mb\n";
    }

}
